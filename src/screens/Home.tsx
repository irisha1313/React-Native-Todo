import { Button, Header, TackItem } from "@/components"
import Colors from "@/constants/Colors"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { typedNavigation } from "@/types/navigation"
import React, { FC } from "react"
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface IProps {
	navigation: typedNavigation
}
const WIDTH_CARD = Dimensions.get("window").width * 0.85
const ITEM_HEIGHT = 70
const WIDTH_SCREEN = Dimensions.get("window").width

export const Home: FC<IProps> = ({ navigation }) => {
	const insets = useSafeAreaInsets()

	const { todos, status: todoStatus } = useAppSelector((state) => state.todo)
	const compleated = todos.filter((todo) => todo.completed)
	const dispatch = useAppDispatch()

	return (
		<>
			<Header />

			<GestureHandlerRootView style={styles.container}>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={todos.filter((todo) => !todo.completed)}
					renderItem={({ item, index }) => (
						<TackItem item={item} index={index} />
					)}
					style={[
						styles.flatListContainer,
						{
							top: -50,
							maxHeight: 255,
							marginBottom: -25,
						},
					]}
				/>
				<Text style={styles.text}>Compleated ({compleated.length})</Text>
				{compleated.length === 0 ? (
					<View
						style={[
							styles.flatListContainer,
							{
								height: 160,
								marginBottom: insets.bottom,
								justifyContent: "center",
							},
						]}
					>
						<Text
							style={{
								textAlign: "center",
								fontWeight: "600",
								fontSize: 18,
							}}
						>
							You don't have any completed tasks yet
						</Text>
					</View>
				) : (
					<FlatList
						showsVerticalScrollIndicator={false}
						data={compleated}
						renderItem={({ item, index }) => (
							<TackItem item={item} index={index} />
						)}
						style={[
							styles.flatListContainer,
							{
								maxHeight: 160,
								marginBottom: insets.bottom,
							},
						]}
					/>
				)}

				<View style={{ flex: 1 }} />
				<Button
					onPress={() => navigation.navigate("CreateTask")}
					title={"Add New Task"}
					insets={insets}
				/>
			</GestureHandlerRootView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "Colors.white",
		alignItems: "center",
	},

	text: {
		fontWeight: "600",
		fontSize: 16,
		marginBottom: 25,
		color: "#000",
		alignSelf: "flex-start",
		textAlign: "right",
		paddingHorizontal: 20,
	},
	flatListContainer: {
		backgroundColor: Colors.white,
		width: 360,
		borderRadius: 20,
	},
})