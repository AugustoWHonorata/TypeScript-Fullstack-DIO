import { Box, Text, Flex } from "@chakra-ui/react";

const Footer: React.FC = () => (
	<Box as="footer" bg="gray.800" color="white" py={4} width="100%">
		<Flex justify="center" align="center">
			<Text fontSize="sm">© {new Date().getFullYear()} Augusto Honorata. All rights reserved.</Text>
		</Flex>
	</Box>
);

export default Footer;
