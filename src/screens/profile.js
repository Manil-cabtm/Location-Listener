import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';

const userId= 1;

const interests= ["Hiking", "Eating", "Video gaming", "Painting", "Biking", "Dancing"];

const user1= {
  id: 1,
  name: "Joe Doe",
  subtitle: "RIT Student '24",
  image: require('../res/user.png'),
  noOfFriends: 24,
  friends: [
    { 
      name: "John Doe",
      image: require('../res/user.png'),
    },
    { 
      name: "Jane Doe",
      image: require('../res/user.png'),
    },
    { 
      name: "John Wick",
      image: require('../res/user.png'),
    },    
  ],
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non erat posuere, rhoncus dui non, egestas ligula.",
  acedemicMajor: "Computer Science Major and another very long major",
  extraversion: "Open to meeting new people",
};

const App = () => {
  const [tab, setTab] = useState('profile');
  const [isAbout, setIsAbout] = useState(false);
  const [interestsSelected, setInterestsSelected] = useState(interests.map(interest => false));
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [facebook, setFacebook] = useState(true);
  const data= user1;

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            margin: 16,
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 24,
            color: '#222B45',
          }}>
          Profile
        </Text>

        <View style= {{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={.75}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                margin: 16,
                marginRight: 12,
              }}
              source={require('../res/calender.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.75}
          >
            <Image
              style={{
                width: 24,
                height: 24, 
                margin: 16,
                marginLeft: 12,
              }}
              source={require('../res/settings.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
        }}
      >
        <Image
          style={{
           width: 96,
           height: 96,
           borderRadius: 100,
           marginVertical: 18,
          }}
          source={data.image}
        />

        <View style= {{
          flex: 1,
          marginHorizontal: 16,
        }}>
          <Text style= {{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 24,
            color: '#000000',
          }}>
            {data.name}
          </Text>

          <Text style= {{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 13,
            lineHeight: 18,
            color: '#000000',
            marginTop: 8,
          }}>
            {data.subtitle}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require('../res/friends.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 16,
              color: '#FD7900',
              marginLeft: 8
            }}>
              {data.noOfFriends} friends
            </Text>

          </View>
        </View>
      </View>

      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 6,
        }}
      >
        <View 
          style={{
            flex: .38,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,    
            }}
            source={data.friends[0].image}
          />
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,   
              position: 'relative',
              right: 10 
            }}
            source={data.friends[1].image}
          />
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,  
              position: 'relative',
              right: 20   
            }}
            source={data.friends[2].image}
          />
        </View>
        
        <Text style= {{
          flex: 1,
          marginLeft: 6,
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: 13,
          lineHeight: 18,
          color: '#000000',
        }}>
          friends with {data.friends[0].name}, {data.friends[1].name} and {data.noOfFriends} others.
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={.75} 
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 24,
          borderRadius: 4,
          padding: 8,
          backgroundColor: '#EDF1F7',
        }}
      >
        <Text style= {{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: 12,
          lineHeight: 16,
          color: '#000000',
        }}>
          EDIT
        </Text>
      </TouchableOpacity>
      
      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 16,
        }}
      >
        <TouchableOpacity
          activeOpacity={.75}
          style= {{
            flex: .5,
            paddingVertical: 12,
            borderBottomWidth: 4,
            borderBottomColor: tab === 'profile' ? '#222B45' : '#8F9BB329',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress= {() => {setTab('profile');}}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              borderRadius: 100,    
            }}
            source={tab === 'profile' ? require('../res/profile.png') : require('../res/profileInactive.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.75}
          style= {{
            flex: .5,
            paddingVertical: 12,
            borderBottomWidth: 4,
            borderBottomColor: tab === 'event' ? '#222B45' : '#8F9BB329',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress= {() => {setTab('event');}}
        >
          <Image
            style={{
              width: 24,
              height: 24,
              borderRadius: 100,    
            }}
            source={tab === 'event' ? require('../res/event.png') : require('../res/eventInactive.png')}
          />
        </TouchableOpacity>
      </View>   

      <View
        style= {{
          display: tab === 'profile' ? 'flex' : 'none',
          margin: 16,
        }}
      >
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 24,
              color: '#000000',
            }}>
            About me
          </Text>

          <TouchableOpacity
            activeOpacity={.75}
            style= {{
              padding: 4,
              paddingRight: 0,
              display: isAbout ? 'flex' : 'none',
            }}
            onPress= {() => {setIsAbout(false);}}
          >
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 10,
                lineHeight: 12,
                color: '#8F9BB3',
              }}>
              EDIT
            </Text>
          </TouchableOpacity>          
        </View>

        <View
          style= {{flexDirection: 'row'}}
        >
          <TouchableOpacity
            activeOpacity={.75} 
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 16,
              borderRadius: 4,
              padding: 8,
              backgroundColor: '#FD790014',
              borderColor: '#FD7900',
              borderWidth: 1,
              display: !isAbout ? 'flex' : 'none',
              
            }}
            onPress= {() => {setIsAbout(true);}}
          >
            <Image
              style={{
                width: 16,
                height: 16,  
              }}
              source={require('../res/add.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 16,
              color: '#FD7900',
              paddingHorizontal: 8,
            }}>
              ADD INFORMATION
            </Text>
          </TouchableOpacity>
        </View>

        <View 
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: 16,
            display: isAbout ? 'flex' : 'none',
          }}
        >
          <Text style= {{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 15,
            lineHeight: 20,
            color: '#000000',
          }}>
            {data.about}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 21,
                height: 18,
              }}
              source={require('../res/academia.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 15,
              lineHeight: 20,
              color: '#2E3A59',
              marginLeft: 13,
              marginRight: 16,
            }}>
              {data.acedemicMajor}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 21,
                height: 18,
              }}
              source={require('../res/extraversion.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: 15,
              lineHeight: 20,
              color: '#2E3A59',
              marginLeft: 13,
              marginRight: 16,
            }}>
              {data.extraversion}
            </Text>
          </View> 
        </View>

        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 26,
          }}
        >
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 24,
              color: '#000000',
            }}>
            Interests
          </Text>

          <TouchableOpacity
            activeOpacity={.75}
            style= {{
              padding: 4,
              paddingRight: 0,
            }}
            onPress= {() => {}}
          >
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 10,
                lineHeight: 12,
                color: '#8F9BB3',
              }}>
              VIEW ALL
            </Text>
          </TouchableOpacity>          
        </View>

        <View
          style= {{
            marginTop: 12,
            flexDirection: 'row',
            flexWrap: "wrap",
          }}
        >
          {
            interests.map((interest, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={.75}
                  style= {{
                    paddingHorizontal: 6,
                    paddingVertical: 4,
                    borderRadius: 25,
                    backgroundColor: interestsSelected[index] ? '#FD790014' : '#8F9BB314',
                    borderColor: interestsSelected[index] ? '#FD7900' : '#8F9BB3',
                    borderWidth: 1,
                    marginRight: 10,
                    marginBottom: 12,
                  }}
                  onPress= {() => {                    
                    let tempSelected= interestsSelected.map((intr, i) => {
                        return (
                          i === index ? 
                            !interestsSelected[i] :
                            interestsSelected[i]
                        )
                      }) 
                    setInterestsSelected(tempSelected);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: 15,
                      lineHeight: 24,
                      color: interestsSelected[index] ? '#FD7900' : '#8F9BB3',
                      paddingHorizontal: 16,
                    }}>
                    {interest}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 18,
              lineHeight: 24,
              color: '#000000',
            }}>
            Social Media
          </Text>        
        </View>

        <View
          style= {{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 112}}
        >
          <TouchableOpacity
            activeOpacity={.75} 
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 4,
              padding: 6,
              backgroundColor: instagram ? '#ffffff' : '#EDF1F7',
              marginRight: 12,
              marginTop: 12, 
            }}
            onPress= {() => {setInstagram(!instagram);}}
          >
            <Image
              style={{
                width: 12,
                height: 12,  
              }}
              source={require('../res/instagram.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 10,
              lineHeight: 12,
              color: '#222B45',
              paddingHorizontal: 8,
            }}>
              {
                instagram ? '' : 'Add '
              }
              Instagram
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={.75} 
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 4,
              padding: 6,
              backgroundColor: twitter ? '#ffffff' : '#EDF1F7',
              marginRight: 12,
              marginTop: 12, 
            }}
            onPress= {() => {setTwitter(!twitter);}}
          >
            <Image
              style={{
                width: 12,
                height: 12,  
              }}
              source={require('../res/twitter.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 10,
              lineHeight: 12,
              color: '#222B45',
              paddingHorizontal: 8,
            }}>
              {
                twitter ? '' : 'Add '
              }
              Twitter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={.75} 
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 4,
              padding: 6,
              backgroundColor: facebook ? '#ffffff' : '#EDF1F7',
              marginRight: 12,
              marginTop: 12, 
            }}
            onPress= {() => {setFacebook(!facebook);}}
          >
            <Image
              style={{
                width: 12,
                height: 12,  
              }}
              source={require('../res/facebook.png')}
            />
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 10,
              lineHeight: 12,
              color: '#222B45',
              paddingHorizontal: 8,
            }}>
              {
                facebook ? '' : 'Add '
              }
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
        
      </View> 

      <View
        style= {{
          display: tab === 'event' ? 'flex' : 'none',
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 18,
            lineHeight: 24,
            color: '#000000',
            textAlign: 'center',
          }}>
          No events yet.
        </Text>  
        <Text
          style={{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 15,
            lineHeight: 24,
            color: '#000000',
            textAlign: 'center',
            marginTop: 8,
            marginHorizontal: 50,
          }}>
          You have not created or attended any events yet.
        </Text>  
        <View
          style= {{flexDirection: 'row', marginTop: 8,}}
        >
          <TouchableOpacity
            activeOpacity={.75} 
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 4,
              padding: 8,
              backgroundColor: '#FD790014',
              borderColor: '#FD7900',
              borderWidth: 1,              
            }}
          >
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 16,
              color: '#FD7900',
              paddingHorizontal: 8,
            }}>
              INVITE TO EVENT
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style= {{flexDirection: 'row', marginTop: 12,}}
        >
          <TouchableOpacity
            activeOpacity={.75} 
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: 4,
              padding: 8,
              backgroundColor: '#8F9BB314',
              borderColor: '#8F9BB3',
              borderWidth: 1,              
            }}
          >
            <Text style= {{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 16,
              color: '#8F9BB3',
              paddingHorizontal: 8,
            }}>
              BROWSE EVENTS
            </Text>
          </TouchableOpacity>
        </View>
      </View> 

    </ScrollView>
  );
};

export default App;
