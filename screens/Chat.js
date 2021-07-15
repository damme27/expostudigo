import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Chat = (params) =>{
    const [messages, setMessages] = useState([
    
        {
          _id: 0,
          text: 'New room CISS Printer created.',
          createdAt: new Date().getTime(),
          system: true
        },
      
        {
          _id: 1,
          text: 'Mohon untuk mengajukan pertanyaan terkait :\nProduct Feature CISS Printer',
          createdAt: new Date().getTime(),
          user: {
            _id: 2,
            name: 'AM Presales1',
            renderUsernameOnMessage:true
          }
        }
      ]);

    function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
    }

    function renderBubble(props) {
        return (
          // Step 3: return the component
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                // Here is the color change
                backgroundColor: '#164194'
              }
            }}
            textStyle={{
              right: {
                color: '#fff'
              }
            }}
          />
        );
      }
      
    function renderSend(props) {
    return (
        <Send {...props}>
        <View style={styles.sendingContainer}>
            <MaterialCommunityIcons name="send-circle" size={42} color="#164194" />
        </View>
        </Send>
    );
    }

    function scrollToBottomComponent() {
        return (
          <View style={styles.bottomComponentContainer}>
            <MaterialCommunityIcons name="arrow-down" size={32} color="#164194" />
          </View>
        );
      }

  return (
    <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        user={{ _id: 1, name: 'User Test' }}
        renderBubble={renderBubble}
        placeholder="Type your message here..."
        showUserAvatar
        alwaysShowSend
        renderUsernameOnMessage
        renderSend={renderSend}
        scrollToBottom 
        scrollToBottomComponent={scrollToBottomComponent}
    />
  );
 };

 const styles = StyleSheet.create({
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        
      }
  });
 
export default Chat;
