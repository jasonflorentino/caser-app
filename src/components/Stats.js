import { Group, Text } from '@mantine/core';

import "./Stats.scss";

const Stats = ({ len, words, lines }) => {
  return(
    <Group spacing={10}>
      <Text>
        <Text component="span" mr={4}>{len}</Text> 
        Char{len === 1 ? '' : "s"}
      </Text>
      <Text>
        <Text component="span" mr={4}>{words}</Text> 
        Word{words === 1 ? '' : "s"}
      </Text>
      <Text>
        <Text component="span" mr={4}>{lines}</Text> 
        Line{lines === 1 ? '' : "s"}
      </Text>
    </Group>
  )
}

export default Stats;