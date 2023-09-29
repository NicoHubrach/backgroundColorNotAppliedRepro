import { View, Text } from 'react-native';
import Markdown from 'react-native-marked';

const example_markdown =
  `
# Example Heading
Example Text
`

/**
 * This doesnt work, because it has no styles applied (It's white) and fills quite a chunk on the screen
 */
const bare_minimum = <Markdown value={example_markdown} />

/**
 * This **almost** works. It renders the text and h1 as I'd like it to be (text white, background black)
 * but it still leaves quite some space on the screen that is white
 */
const bare_minimum_with_styles = <Markdown value={example_markdown} styles={{
  text: {
    backgroundColor: 'black',
    color: 'white',
  },
  h1: {
    backgroundColor: 'black',
    color: 'white',
  }
}}/>

/**
 * I tought this would work because here I could explicitly state the background, but still no result.
 * Interestinly enough, every other property (like 'text') is applied
 */
const bare_minimum_with_theme = <Markdown value={example_markdown} theme={{
  colors: {
    background: 'black',
    border: 'black',
    code: 'black',
    link: 'black',
    text: 'red',          //This is red, just to demonstrate that the 'text' color is working
  }
}}/>

/**
 * My Project wants to implement a 'dark' and 'light' mode.
 * Because of that I wrap my whole Application in a View, which has
 * a specified backgroundColor, as well as flex set to 1
 * I want every component inside of that View to comply with my backgroundColor
 */
export default function App() {
  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1,
    }}>
      <View>
        {bare_minimum}
        {bare_minimum_with_styles}
        {bare_minimum_with_theme}
      </View>
      <View>
        <Text style={{color: 'white',}}>{example_markdown}</Text>
      </View>
    </View>
  );
}
