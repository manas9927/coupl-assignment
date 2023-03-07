import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default PartnerCard = ({
  inviteeName,
  inviteeSubHeading,
  hasReceivedInvite,
}) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        marginVertical: 6,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 44 / 2,
          borderColor: "#ADADAD",
          borderWidth: 1,
          marginHorizontal: 5,
        }}
      />
      <View style={{ flexDirection: "column", width: "55%" }}>
        <Text
          style={{
            fontSize: 18,
            marginHorizontal: 5,
            fontWeight: "400",
            color: "black",
          }}
        >
          {inviteeName}
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginHorizontal: 5,
            fontWeight: "300",
            color: "#666666",
          }}
        >
          {inviteeSubHeading}
        </Text>
      </View>
      {hasReceivedInvite ? (
        <View
          style={{
            borderWidth: 1,
            paddingHorizontal: 8,
            marginHorizontal: 5,
            paddingVertical: 4,
            borderColor: "#FE3E32",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#FE3E32", fontWeight: "500" }}>Withdraw</Text>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          <MaterialCommunityIcons
            name="close-circle-outline"
            size={35}
            color="#FE3E32"
            style={{ paddingHorizontal: 5 }}
          />
          <MaterialCommunityIcons
            name="check-circle"
            size={35}
            color="#0BB111"
            style={{ paddingHorizontal: 5 }}
          />
        </View>
      )}
    </View>
  );
};
