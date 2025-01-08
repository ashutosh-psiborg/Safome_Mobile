import React from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Fetcher function
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export default function FetchData() {
  // Use React Query's `useQuery` hook
  const { data, error, isLoading, refetch } = useQuery(['posts'], fetchPosts);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text style={styles.errorText}>Error: {error.message}</Text>
        <Button title="Retry" onPress={refetch} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts:</Text>
      {data.slice(0, 5).map((post) => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.title}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  post: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
  },
  title: {
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
