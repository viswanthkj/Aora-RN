import { FlatList, Text, View } from 'react-native'
import React from 'react'

const TrendingVideos = ({
    posts
}) => {
  return (
    <View>
      <FlatList 
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
            return(
              <View>
                 <Text>{item.title}</Text>
              </View>
            )
        }}
      />
    </View>
  )
}

export default TrendingVideos

