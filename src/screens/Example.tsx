import { ConfirmButton } from "@/components/Buttons/ConfirmButton"
import React from "react"
import { Alert, StyleSheet } from "react-native"

export const Example = () => {
	const createTwoButtonAlert = () =>
		Alert.alert("Are you sure you want to delete the task?", "", [
			{
				text: "Cancel",
				onPress: () => null,
				style: "cancel",
			},
			{ text: "OK", onPress: () => console.log("OK Pressed") },
		])

	return <ConfirmButton />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
	},
})
