import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TextInput,
	View,
	TouchableOpacity,
	KeyboardAvoidingView,
	StatusBar,
	Platform,
} from 'react-native';

export default function App() {
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');

	const handleSubmit = () => {
		alert(`Weight ${weight}, Height ${height}`);
	};

	return (
		// <SafeAreaView style={styles.container}>
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.select({
				ios: 'padding',
				android: null,
			})}
		>
			<StatusBar barStyle="light-content" />

			<View style={styles.containerTitle}>
				<Text style={styles.title}>Calculate the IMC</Text>
			</View>
			<View style={styles.containerInput}>
				<TextInput
					style={styles.input}
					placeholder="Weight (Kg)"
					value={weight}
					onChangeText={weight => setWeight(weight)}
					keyboardType="numeric"
					returnKeyType="next"
				/>
				<TextInput
					style={styles.input}
					placeholder="Height (cm)"
					value={height}
					onChangeText={height => setHeight(height)}
					keyboardType="numeric"
					returnKeyType="send"
				/>
			</View>
			<View style={styles.containerButton}>
				<TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
					<Text style={styles.textButton}>Calculate</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
		// </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#7159C1',
	},
	containerKeyboard: {
		flex: 1,
		justifyContent: 'space-between',
	},
	containerTitle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#fff',
		fontSize: 30,
	},
	containerInput: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	input: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 10,
		color: '#7159C1',
		height: 50,
		width: '40%',
	},
	containerButton: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		width: '90%',
		height: 50,
		backgroundColor: '#fff',
	},
	textButton: {
		color: '#7159C1',
		fontSize: 20,
	},
});
