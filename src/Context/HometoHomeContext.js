import React from 'react'

export default React.createContext({
    addresses: [],
    lists: [],
    addList: () => {},
    addAddress: () => {},
})