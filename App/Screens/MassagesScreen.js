import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../Components/Screen";
import ListItem from "../Components/ListItem";
import ListItemSeparator from "../Components/ListItemSeparator";
import ListItemDeleteAction from "../Components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/pass.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/pass.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = message.filter((m) => m.id !== message.id)
      setMessages(newMessages);
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "2",
              description: "E-commerce",
              image: require("../assets/pass.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
