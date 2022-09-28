import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Props } from '../types/common/props';

export const DetailsScreen = (props: Props) => {
  const navigateBack = () => {
    props.navigation.goBack();
  };

  const BackIcon = (props: Props) => <Icon {...props} name="arrow-back" />;

  const BackAction = () => <TopNavigationAction icon={BackIcon(props)} onPress={navigateBack} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};
