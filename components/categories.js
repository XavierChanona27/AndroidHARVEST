import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <View style={{ marginTop: 4 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categories.map((category, index) => {
                    const isActive = category.id === activeCategory;
                    const btnClass = isActive ? { backgroundColor: '#6B7280' } : { backgroundColor: '#E5E7EB' };
                    const textClass = isActive ? { fontWeight: 'bold', color: '#1F2937' } : { color: '#6B7280' };

                    return (
                        <View key={index} style={{ marginRight: 6 }}>
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category.id)}
                                style={{ padding: 8, borderRadius: 25, ...btnClass }}
                            >
                                <Image style={{ width: 45, height: 45 }} source={category.image} />
                                <Text style={{ fontSize: 12, marginTop: 4, textAlign: 'center', ...textClass }}>
                                    {category.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
