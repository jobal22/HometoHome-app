export const findAddress = (addresses=[], addressId) =>
addresses.find(address => address.id == addressId)

export const findList = (lists=[], listId) =>
lists.find(list => list.id == listId)

export const getAddressesForList = (addresses=[], addressId) => (
    (!addressId)
      ? addresses
      : addresses.filter(address => address.gospelpresentation == addressId)
)

// export const getNotesForFolder = (addresses=[], gpId) => (
//     (!gpId)
//       ? addresses
//       : addresses.filter(address => address.gospelPresentation == gpId)
//   )

  export const getNotesForFolder = (addresses=[], addressIds) => (
    (!addressIds)
      ? addresses
      : addresses.filter(address => address.id == addressIds)
  )


// export const findFolder = (folders=[], folderId) =>
// folders.find(folder => folder.id == folderId)

// export const findNote = (notes=[], noteId) =>
// notes.find(note => note.id == noteId)

// export const getTeamsforList = (teams=[], listId) => (
// (!listId)
//   ? teams
//   : teams.filter(team => team.liId == listId)
// )

// export const countNotesForFolder = (notes=[], folderId) =>
// notes.filter(note => note.folder_id == folderId).length
