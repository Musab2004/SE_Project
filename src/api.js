export const getComments = async () => {
    return [
      {
        eventid:"1",
        id: "1",
        body: "First comment Event 1",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        eventid:"2",
        id: "2",
        body: "Second comment Event 2",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      // {
      //   eventid:"2",
      //   id: "3",
      //   body: "First comment first child",
      //   username: "John",
      //   userId: "2",
      //   parentId: "4",
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
    //   {
    //     eventid:"2",
    //     id: "4",
    //     body: "Second comment second child",
    //     username: "John",
    //     userId: "2",
    //     parentId: "2",
    //     createdAt: "2021-08-16T23:00:33.010+02:00",
    //  }
          // {
      //   eventid:"2",
      //   id: "1",
      //   body: "First comment",
      //   username: "Jack",
      //   userId: "1",
      //   parentId: null,
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // }
      // {
      //   eventid:"2",
      //   id: "2",
      //   body: "Second comment",
      //   username: "John",
      //   userId: "2",
      //   parentId: null,
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
      // {
      //   eventid:"2",
      //   id: "3",
      //   body: "First comment first child",
      //   username: "John",
      //   userId: "2",
      //   parentId: "1",
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
      // {
      //   eventid:"2",
      //   id: "4",
      //   body: "Second comment second child",
      //   username: "John",
      //   userId: "2",
      //   parentId: "2",
      //   createdAt: "2021-08-16T23:00:33.010+02:00",
      // }
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };