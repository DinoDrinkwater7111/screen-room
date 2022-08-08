import { Select } from '@chakra-ui/react';
import * as React from 'react';
import { sourceTypes } from 'src/app/constants';

interface Props {
    sourceType: typeof sourceTypes[number];
    onSourceTypeChange: (sourceType: typeof sourceTypes[number]) => void;
}

export const SourceTypeSelect: React.FC<Props> = (props) => {
    const options = React.useMemo<React.ReactNode>(() => {
        const result: React.ReactNode[] = [];
        for (const sourceType of sourceTypes) {
            result.push(
                <option key={sourceType} value={sourceType}>
                    {sourceType}
                </option>
            );
        }
        return result;
    }, []);

    return (
        <Select
            _focus={{ boxShadow: 'none' }}
            border={0}
            value={props.sourceType}
            onChange={(e) => props.onSourceTypeChange(e.target.value as never)}
        >
            {options}
        </Select>
    );
};
