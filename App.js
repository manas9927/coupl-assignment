import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PartnerCard from "./components/PartnerCard";

export default App = () => {
  console.log("App launched");

  const benefits = [
    {
      id: 1,
      icon: "check",
      iconColor: "lightgreen",
      text: "Equal access to your shared wallet",
    },
    {
      id: 2,
      icon: "check",
      iconColor: "lightgreen",
      text: "Give your partner a joint RuPay card",
    },
  ];

  const invitesSent = [{ id: 1, name: "Varun Jaiswal", type: "Partner" }];
  const invitesReceived = [
    { id: 1, name: "Kritika Vishnoi", contact: "+91 1215125125" },
    { id: 2, name: "Aryan Tiwari", contact: "+91 1215125125" },
  ];
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#F8F9FF",
      }}
    >
      <LinearGradient
        colors={["#263F49", "#000000"]}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color="white"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
            paddingVertical: 15,
          }}
        >
          <View style={{ width: "65%" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Invite your Partner
            </Text>
            {benefits.map((benefit) => (
              <View
                style={{ flexDirection: "row", paddingVertical: 5 }}
                key={benefit.id}
              >
                <MaterialCommunityIcons
                  name={benefit.icon}
                  size={20}
                  color={benefit.iconColor}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    paddingHorizontal: 10,
                  }}
                >
                  {benefit.text}
                </Text>
              </View>
            ))}
          </View>
          <Image
            source={require("./assets/abstract-communication.png")}
            style={{ marginHorizontal: 10 }}
          />
        </View>
      </LinearGradient>
      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "500", paddingVertical: 10 }}>
          Sent Invite
        </Text>
        {invitesSent.map((invitee) => (
          <PartnerCard
            key={invitee.id}
            inviteeName={invitee.name}
            inviteeSubHeading={invitee.type}
            hasReceivedInvite
          />
        ))}
      </View>
      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Received Invites
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              color: "#FE3E32",
            }}
          >
            Reject all
          </Text>
        </View>
        {invitesReceived.map((invitee) => (
          <PartnerCard
            key={invitee.id}
            inviteeName={invitee.name}
            inviteeSubHeading={invitee.contact}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
