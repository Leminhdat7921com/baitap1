import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [phone, setPhone] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <Text style={styles.label}>Nhập số điện thoại</Text>
            <Text style={styles.subLabel}>
                Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại phần mềm
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="phone-pad"
                onChangeText={setPhone}
            />
            <TouchableOpacity
                style={[styles.button, phone ? styles.active : styles.inactive]}
                disabled={!phone}
            >
                <Text style={styles.buttonText}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold" },
    label: { fontSize: 16, marginVertical: 10 },
    subLabel: { fontSize: 14, color: "#666", marginBottom: 20 },
    input: { borderBottomWidth: 1, borderBottomColor: "#ccc", marginBottom: 20, padding: 10 },
    button: { padding: 15, borderRadius: 5, alignItems: "center" },
    active: { backgroundColor: "#4CAF50" },
    inactive: { backgroundColor: "#ccc" },
    buttonText: { color: "#fff", fontWeight: "bold" },
});

export default LoginScreen;
