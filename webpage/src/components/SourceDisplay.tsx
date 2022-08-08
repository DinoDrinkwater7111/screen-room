import { Center, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ImageSource, Source, TextSource } from 'src/classes/Source';
import { useImmer } from 'use-immer';

interface I$ {}

interface Props {
    source: Source;
}

export const SourceDisplay: React.FC<Props> = (props) => {
    const $default = React.useMemo<I$>(() => {
        return {};
    }, []);

    const [$, set$] = useImmer($default);

    if (props.source instanceof TextSource) {
        return (
            <Center height="100%" bg="black">
                <Text fontSize="6xl" color="white">
                    {props.source.text}
                </Text>
            </Center>
        );
    }

    if (props.source instanceof ImageSource) {
        return (
            <Center height="100%" bg="black">
                <Image boxSize="100%" objectFit="scale-down" src={props.source.url} alt={props.source.url} />
            </Center>
        );
    }

    return (
        <Center height="100%" bg="black">
            <Text fontSize="6xl" color="red">
                {`Unknown source: ${props.source.constructor.name}`}
            </Text>
        </Center>
    );
};
