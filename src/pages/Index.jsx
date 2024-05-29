import { Box, Container, VStack, Heading, Text, Image, Flex, Link, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const featuredRecipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chunks of grilled chicken (tikka) cooked in a creamy, spiced tomato sauce.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake perfect for any occasion.",
    image: "https://via.placeholder.com/300",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="teal.500" color="white" p={4} align="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            RecipeShare
          </Link>
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/recipes" _hover={{ textDecoration: "none" }}>
            Recipes
          </Link>
          <Link as={RouterLink} to="/submit" _hover={{ textDecoration: "none" }}>
            Submit a Recipe
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Featured Recipes
        </Heading>
        <Flex wrap="wrap" justify="center" spacing={4}>
          {featuredRecipes.map((recipe, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {recipe.title}
                </Heading>
                <Text>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;