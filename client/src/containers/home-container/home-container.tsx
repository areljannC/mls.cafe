// EXTERNAL IMPORTS
import React, { memo } from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';

// Component
const HomeContainer = () => (
  <VStack as='main' width='100%' height='100%' justifyContent='center' alignItems='center'>
    <Heading as='h1' size='2xl' textAlign='center'>
      mls.cafe
    </Heading>
    <Text as='p' textAlign='center'>
      🏠 A place to discuss and review real estate listings in Canada.
    </Text>
    <Text as='p' textAlign='center'>
      Coming soon early 2023.
    </Text>
  </VStack>
);

// Display Name
HomeContainer.displayName = 'HomeContainer';

export default memo(HomeContainer);
