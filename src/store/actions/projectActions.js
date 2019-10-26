export const createProject = (project) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName : profile.firstName,
      authorLastName : profile.lastName,
      authorId: authorId.authorId,
      createdAt: authorId.newData
    }).then (() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).createProject.catch((err) => {
      dispatch({ type: "CREATE_PROJECT_ERROR", err})
    })
  }
};