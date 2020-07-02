export const findAddress = (addresses=[], addressId) =>
addresses.find(address => address.id == addressId)

export const findList = (lists=[], listId) =>
lists.find(list => list.id == listId)

export const getAddressesForList = (addresses=[], addressId) => (
  (!addressId)
    ? addresses
    : addresses.filter(address => address.gospelpresentation == addressId)
);

export const countAddressesForList = (addresses=[], gpid, nsid) =>
  addresses.filter(a => a.gospelpresentation == gpid && a.newsalvations == nsid).length;
