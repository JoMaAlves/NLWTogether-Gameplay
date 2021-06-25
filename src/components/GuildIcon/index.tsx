import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"

  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}