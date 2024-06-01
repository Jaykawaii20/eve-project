import { useRealm } from "@/contexts/Realm";
import React, { useCallback, useEffect } from "react";
import { useCollection } from "./useCollection";
import { useWatch } from "./useWatch";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversations,
  getMessagesForConversation,
} from "@/store/ConversationSlice";

export default function useConversation() {
  const app = useRealm();
  const dispatch = useDispatch();

  const conversations = useSelector(
    (store) => store.conversation?.conversations
  );
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentChat, setCurrentChat] = React.useState(null);

  // Get a client object for the todo item collection
  const conversation = useCollection({
    cluster: "mongodb-atlas",
    db: "eve",
    collection: "user_chat_history",
  });
  const messages = useCollection({
    cluster: "mongodb-atlas",
    db: "eve",
    collection: "conversation",
  });

  useEffect(() => {
    setLoading(true);
    dispatch(getConversations(() => setLoading(false)));
  }, []);

  useEffect(() => {
    if (currentChat) {
      dispatch(
        getMessagesForConversation(currentChat._id, () => setLoading(false))
      );
    }
  }, [currentChat]);

  // Use a MongoDB change stream to reactively update state when operations succeed
  useWatch(conversation, {
    onInsert: (change) => {
      dispatch(getConversations(() => setLoading(false)));
    },
    onUpdate: (change) => {
      setTodos((oldTodos) => {});
    },
    onReplace: (change) => {
      setTodos((oldTodos) => {});
    },
    onDelete: (change) => {
      setTodos((oldTodos) => {
        alert("Todo updated!");
      });
    },
  });

  const onUpdate = useCallback(
    (change) => {
      if (currentChat?._id) {
        dispatch(
          getMessagesForConversation(currentChat._id, () => setLoading(false))
        );
      }
    },
    [currentChat]
  );

  useWatch(messages, {
    onInsert: (change) => {
      onUpdate();
    },
    onUpdate: (change) => {
      onUpdate();
    },
    onReplace: (change) => {
      onUpdate();
    },
    onDelete: (change) => {
      onUpdate();
    },
  });

  return {
    conversations,
    loading,
    currentChat,
    setCurrentChat,
  };
}
