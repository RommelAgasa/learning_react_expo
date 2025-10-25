import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: true,
            headerTitle: "Recipes App",
            tabBarActiveTintColor: "#22d3ee",
            tabBarInactiveTintColor: "#94a3b8",
            tabBarStyle: {
                backgroundColor: "#0f172a",
                height: 80,
                paddingBottom: 10,
                paddingTop: 10
            },
            headerStyle: {
                backgroundColor: "#0f172a"
            },
            headerTintColor: "#f8fafc",
        }}>
            <Tabs.Screen name="index" options={
                {
                    title: "Home",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={"white"}/>
                    ),
                    tabBarBadge: 3,
                }
            }/>
            <Tabs.Screen name="explore" options={
                {
                    title: "Explore",
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={"white"}/>
                    ),
                }
            }/>
            <Tabs.Screen name="profile" options={
                {
                    title: "Explore",
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={"white"}/>
                    ),
                }
            }/>
        </Tabs>
    );
}