/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool {
    onCreateSchool {
      number
      name
      accounts {
        items {
          number
          permissions
          usercount
          users {
            items {
              number
              username
              password
              id
              createdAt
              updatedAt
              accountUsersId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
          schoolAccountsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool {
    onUpdateSchool {
      number
      name
      accounts {
        items {
          number
          permissions
          usercount
          users {
            items {
              number
              username
              password
              id
              createdAt
              updatedAt
              accountUsersId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
          schoolAccountsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool {
    onDeleteSchool {
      number
      name
      accounts {
        items {
          number
          permissions
          usercount
          users {
            items {
              number
              username
              password
              id
              createdAt
              updatedAt
              accountUsersId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
          schoolAccountsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      number
      permissions
      usercount
      users {
        items {
          number
          username
          password
          id
          createdAt
          updatedAt
          accountUsersId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      schoolAccountsId
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      number
      permissions
      usercount
      users {
        items {
          number
          username
          password
          id
          createdAt
          updatedAt
          accountUsersId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      schoolAccountsId
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      number
      permissions
      usercount
      users {
        items {
          number
          username
          password
          id
          createdAt
          updatedAt
          accountUsersId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      schoolAccountsId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      number
      username
      password
      id
      createdAt
      updatedAt
      accountUsersId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      number
      username
      password
      id
      createdAt
      updatedAt
      accountUsersId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      number
      username
      password
      id
      createdAt
      updatedAt
      accountUsersId
    }
  }
`;
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
      fullname
      shortname
      abbr
      shortdesc
      longdesc
      courses {
        items {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
      fullname
      shortname
      abbr
      shortdesc
      longdesc
      courses {
        items {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
      fullname
      shortname
      abbr
      shortdesc
      longdesc
      courses {
        items {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      courseid
      test {
        fullname
        shortname
        abbr
        shortdesc
        longdesc
        courses {
          items {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      level
      abbr
      videos {
        items {
          courseID
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          day
          title
          shortdesc
          longdesc
          slug
          section {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      videocount
      visuals {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        tnurl
        themename
        id
        createdAt
        updatedAt
      }
      descriptions {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        title
        subtitle
        shortdesc
        longdesc
        sections {
          items {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      testCoursesId
      courseVisualsId
      courseDescriptionsId
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      courseid
      test {
        fullname
        shortname
        abbr
        shortdesc
        longdesc
        courses {
          items {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      level
      abbr
      videos {
        items {
          courseID
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          day
          title
          shortdesc
          longdesc
          slug
          section {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      videocount
      visuals {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        tnurl
        themename
        id
        createdAt
        updatedAt
      }
      descriptions {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        title
        subtitle
        shortdesc
        longdesc
        sections {
          items {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      testCoursesId
      courseVisualsId
      courseDescriptionsId
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      courseid
      test {
        fullname
        shortname
        abbr
        shortdesc
        longdesc
        courses {
          items {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      level
      abbr
      videos {
        items {
          courseID
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          day
          title
          shortdesc
          longdesc
          slug
          section {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      videocount
      visuals {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        tnurl
        themename
        id
        createdAt
        updatedAt
      }
      descriptions {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        title
        subtitle
        shortdesc
        longdesc
        sections {
          items {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      testCoursesId
      courseVisualsId
      courseDescriptionsId
    }
  }
`;
export const onCreateCourseVisuals = /* GraphQL */ `
  subscription OnCreateCourseVisuals {
    onCreateCourseVisuals {
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      tnurl
      themename
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseVisuals = /* GraphQL */ `
  subscription OnUpdateCourseVisuals {
    onUpdateCourseVisuals {
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      tnurl
      themename
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseVisuals = /* GraphQL */ `
  subscription OnDeleteCourseVisuals {
    onDeleteCourseVisuals {
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      tnurl
      themename
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourseDescriptions = /* GraphQL */ `
  subscription OnCreateCourseDescriptions {
    onCreateCourseDescriptions {
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      title
      subtitle
      shortdesc
      longdesc
      sections {
        items {
          descripition {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          name
          number
          desc
          id
          createdAt
          updatedAt
          courseDescriptionsSectionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseDescriptions = /* GraphQL */ `
  subscription OnUpdateCourseDescriptions {
    onUpdateCourseDescriptions {
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      title
      subtitle
      shortdesc
      longdesc
      sections {
        items {
          descripition {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          name
          number
          desc
          id
          createdAt
          updatedAt
          courseDescriptionsSectionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseDescriptions = /* GraphQL */ `
  subscription OnDeleteCourseDescriptions {
    onDeleteCourseDescriptions {
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      title
      subtitle
      shortdesc
      longdesc
      sections {
        items {
          descripition {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          name
          number
          desc
          id
          createdAt
          updatedAt
          courseDescriptionsSectionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourseDescriptionsSection = /* GraphQL */ `
  subscription OnCreateCourseDescriptionsSection {
    onCreateCourseDescriptionsSection {
      descripition {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        title
        subtitle
        shortdesc
        longdesc
        sections {
          items {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      name
      number
      desc
      id
      createdAt
      updatedAt
      courseDescriptionsSectionsId
    }
  }
`;
export const onUpdateCourseDescriptionsSection = /* GraphQL */ `
  subscription OnUpdateCourseDescriptionsSection {
    onUpdateCourseDescriptionsSection {
      descripition {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        title
        subtitle
        shortdesc
        longdesc
        sections {
          items {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      name
      number
      desc
      id
      createdAt
      updatedAt
      courseDescriptionsSectionsId
    }
  }
`;
export const onDeleteCourseDescriptionsSection = /* GraphQL */ `
  subscription OnDeleteCourseDescriptionsSection {
    onDeleteCourseDescriptionsSection {
      descripition {
        course {
          courseid
          test {
            fullname
            shortname
            abbr
            shortdesc
            longdesc
            courses {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          level
          abbr
          videos {
            items {
              courseID
              day
              title
              shortdesc
              longdesc
              slug
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          videocount
          visuals {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            tnurl
            themename
            id
            createdAt
            updatedAt
          }
          descriptions {
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            title
            subtitle
            shortdesc
            longdesc
            sections {
              nextToken
            }
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          testCoursesId
          courseVisualsId
          courseDescriptionsId
        }
        title
        subtitle
        shortdesc
        longdesc
        sections {
          items {
            descripition {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            name
            number
            desc
            id
            createdAt
            updatedAt
            courseDescriptionsSectionsId
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      name
      number
      desc
      id
      createdAt
      updatedAt
      courseDescriptionsSectionsId
    }
  }
`;
export const onCreateCourseDescriptionsInfoBox = /* GraphQL */ `
  subscription OnCreateCourseDescriptionsInfoBox {
    onCreateCourseDescriptionsInfoBox {
      name
      items {
        items {
          icon
          text
          id
          createdAt
          updatedAt
          courseDescriptionsInfoBoxItemsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseDescriptionsInfoBox = /* GraphQL */ `
  subscription OnUpdateCourseDescriptionsInfoBox {
    onUpdateCourseDescriptionsInfoBox {
      name
      items {
        items {
          icon
          text
          id
          createdAt
          updatedAt
          courseDescriptionsInfoBoxItemsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseDescriptionsInfoBox = /* GraphQL */ `
  subscription OnDeleteCourseDescriptionsInfoBox {
    onDeleteCourseDescriptionsInfoBox {
      name
      items {
        items {
          icon
          text
          id
          createdAt
          updatedAt
          courseDescriptionsInfoBoxItemsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInfoBoxItem = /* GraphQL */ `
  subscription OnCreateInfoBoxItem {
    onCreateInfoBoxItem {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
    }
  }
`;
export const onUpdateInfoBoxItem = /* GraphQL */ `
  subscription OnUpdateInfoBoxItem {
    onUpdateInfoBoxItem {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
    }
  }
`;
export const onDeleteInfoBoxItem = /* GraphQL */ `
  subscription OnDeleteInfoBoxItem {
    onDeleteInfoBoxItem {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      courseID
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      day
      title
      shortdesc
      longdesc
      slug
      section {
        descripition {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        name
        number
        desc
        id
        createdAt
        updatedAt
        courseDescriptionsSectionsId
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      courseID
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      day
      title
      shortdesc
      longdesc
      slug
      section {
        descripition {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        name
        number
        desc
        id
        createdAt
        updatedAt
        courseDescriptionsSectionsId
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      courseID
      course {
        courseid
        test {
          fullname
          shortname
          abbr
          shortdesc
          longdesc
          courses {
            items {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        level
        abbr
        videos {
          items {
            courseID
            course {
              courseid
              level
              abbr
              videocount
              id
              createdAt
              updatedAt
              testCoursesId
              courseVisualsId
              courseDescriptionsId
            }
            day
            title
            shortdesc
            longdesc
            slug
            section {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        videocount
        visuals {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          tnurl
          themename
          id
          createdAt
          updatedAt
        }
        descriptions {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        testCoursesId
        courseVisualsId
        courseDescriptionsId
      }
      day
      title
      shortdesc
      longdesc
      slug
      section {
        descripition {
          course {
            courseid
            test {
              fullname
              shortname
              abbr
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            level
            abbr
            videos {
              nextToken
            }
            videocount
            visuals {
              tnurl
              themename
              id
              createdAt
              updatedAt
            }
            descriptions {
              title
              subtitle
              shortdesc
              longdesc
              id
              createdAt
              updatedAt
            }
            id
            createdAt
            updatedAt
            testCoursesId
            courseVisualsId
            courseDescriptionsId
          }
          title
          subtitle
          shortdesc
          longdesc
          sections {
            items {
              name
              number
              desc
              id
              createdAt
              updatedAt
              courseDescriptionsSectionsId
            }
            nextToken
          }
          id
          createdAt
          updatedAt
        }
        name
        number
        desc
        id
        createdAt
        updatedAt
        courseDescriptionsSectionsId
      }
      id
      createdAt
      updatedAt
    }
  }
`;
