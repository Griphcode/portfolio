import { Flex, Spacer, Stack, HStack, VStack, Center, Container, Divider, Box, Heading, Text, Button, IconButton, ButtonGroup, Link } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { Github, Twitter } from 'react-bootstrap-icons';
import '../assets/App.css';


export default function Main() {
	return(
		<Flex className="Main">
		<Container h="100px">
			<Box maxW='32rem'>
			  <Heading mb={4}>Hi i'm Griphcode 👨‍💻</Heading>
			  <Text fontSize='xl'>
			    I am a Full-Stack Web Developer/Freelancer. I like to work on open source projects
			  </Text>
			  <Link isExternal href="https://github.com/griphcode/portfolio"><Button className="Socialbuttons" leftIcon={<Github />} size='lg' colorScheme='green' mt='24px'>
			    View Source
			  </Button></Link>
			</Box>
		</Container>
		</Flex>
 );
}