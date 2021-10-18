// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {memo, useEffect} from 'react';
import {areEqual} from 'react-window';

import {$ID} from 'mattermost-redux/types/utilities';
import {UserThread} from 'mattermost-redux/types/threads';

import ThreadItem from '../thread_item';

type Props = {
    data: {
        ids: Array<$ID<UserThread>>;
        selectedThreadId?: $ID<UserThread>;
        scrollToItem: (index: number) => void;
    };
    index: number;
    style: any;
};

function Row({index, style, data}: Props) {
    const itemId = data.ids[index];
    const isSelected = data.selectedThreadId === itemId;

    useEffect(() => {
        if (isSelected) {
            data.scrollToItem(index);
        }
    }, [isSelected, index]);

    return (
        <ThreadItem
            isSelected={isSelected}
            key={itemId}
            style={style}
            threadId={itemId}
        />
    );
}

export default memo(Row, areEqual);
