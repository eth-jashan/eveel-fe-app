import * as Contacts from "expo-contacts";
import api_utils from "../../../assets/api";
export const getContacts = (uid) => {
  return async (dispatch, getState) => {
    //console.log(uid);
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      const { data: contacts } = await Contacts.getContactsAsync();
      const contactList = [];
      for (const contact in contacts) {
        const name = contacts[contact].name ? contacts[contact].name : "";
        const phoneNumbers = contacts[contact].phoneNumbers
          ? contacts[contact].phoneNumbers
          : "";
        const birthday = contacts[contact].birthday
          ? contacts[contact].birthday
          : "";
        const emails = contacts[contact].emails ? contacts[contact].emails : "";
        contactList.push({ name, phoneNumbers, birthday, emails });
      }
      console.log(contactList);
      const response = await fetch(
        `${api_utils.baseURL_Demo}/users/${uid}/contact.json?`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactList),
        }
      );
      //console.log("Retrieved contacts!", contacts[0].name);
    }
  };
};
