export const createProject = (project) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName : profile.firstName,
      authorLastName : profile.lastName,
      authorId: profile.authorId,
      createdAt: profile.newData
    }).then (() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).createProject.catch((err) => {
    })
  }
};