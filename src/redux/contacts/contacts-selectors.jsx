import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

export const getTotalContactsCount = state => {
  const contacts = getContacts(state);
  return contacts.length;
};

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalezedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalezedFilter),
    );
  },
);

export const getIsAdded = createSelector([getContacts], contacts => {
  const isAdded = name => contacts.map(({ name }) => name).includes(name);
  return isAdded;
});
