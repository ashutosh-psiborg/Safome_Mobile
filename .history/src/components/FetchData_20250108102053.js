import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {View, Text, Button, StyleSheet,FlatList} from 'react-native';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

export default function Posts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['hello'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
}
