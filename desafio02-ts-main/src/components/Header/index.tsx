import { Box, Heading } from "@chakra-ui/react";

const Header = () => (
	<Box as="header" py={4} px={8} bg="#ffffff25" opacity="" position="sticky" top="0" zIndex="50" width="100vw" blur="15px">
		<Heading as="h1" size="lg" textAlign="center" color="white" opacity="1">
			DIO Bank
		</Heading>
	</Box>
);

export default Header;
