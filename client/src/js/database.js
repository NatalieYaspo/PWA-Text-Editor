import { openDB } from 'idb';

//Creates a database called Jate
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const postDb = async (content) => {
  console.log('Post to the database');

  if (!content) {
    await content
  }

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ content });

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);

  if (!result) {
    console.error('postDb not implemented');
  }
};

// Method that gets all the content from the database
export const getDb = async () => {

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // console.log(jateDb);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  // console.log('result.value', result[0].content);
  return result[0].value;
};



// Starts the Database
initdb();
