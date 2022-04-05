/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      createdAt
      id
      number
      permissions
      schoolAccountsId
      updatedAt
      usercount
      users {
        items {
          accountUsersId
          createdAt
          id
          number
          password
          updatedAt
          username
        }
        nextToken
      }
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      abbr
      courseDescriptionsId
      courseVisualsId
      courseid
      createdAt
      descriptions {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        longdesc
        sections {
          items {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          nextToken
        }
        shortdesc
        subtitle
        title
        updatedAt
      }
      id
      level
      test {
        abbr
        courses {
          items {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          nextToken
        }
        createdAt
        fullname
        id
        longdesc
        shortdesc
        shortname
        updatedAt
      }
      testCoursesId
      updatedAt
      videocount
      videos {
        items {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          courseID
          createdAt
          day
          id
          longdesc
          section {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          shortdesc
          slug
          title
          updatedAt
        }
        nextToken
      }
      visuals {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        themename
        tnurl
        updatedAt
      }
    }
  }
`;
export const onCreateCourseDescriptions = /* GraphQL */ `
  subscription OnCreateCourseDescriptions {
    onCreateCourseDescriptions {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      createdAt
      id
      longdesc
      sections {
        items {
          courseDescriptionsSectionsId
          createdAt
          desc
          descripition {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          name
          number
          updatedAt
        }
        nextToken
      }
      shortdesc
      subtitle
      title
      updatedAt
    }
  }
`;
export const onCreateCourseDescriptionsInfoBox = /* GraphQL */ `
  subscription OnCreateCourseDescriptionsInfoBox {
    onCreateCourseDescriptionsInfoBox {
      createdAt
      id
      items {
        items {
          courseDescriptionsInfoBoxItemsId
          createdAt
          icon
          id
          text
          updatedAt
        }
        nextToken
      }
      name
      updatedAt
    }
  }
`;
export const onCreateCourseDescriptionsSection = /* GraphQL */ `
  subscription OnCreateCourseDescriptionsSection {
    onCreateCourseDescriptionsSection {
      courseDescriptionsSectionsId
      createdAt
      desc
      descripition {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        longdesc
        sections {
          items {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          nextToken
        }
        shortdesc
        subtitle
        title
        updatedAt
      }
      id
      name
      number
      updatedAt
    }
  }
`;
export const onCreateCourseVisuals = /* GraphQL */ `
  subscription OnCreateCourseVisuals {
    onCreateCourseVisuals {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      createdAt
      id
      themename
      tnurl
      updatedAt
    }
  }
`;
export const onCreateInfoBoxItem = /* GraphQL */ `
  subscription OnCreateInfoBoxItem {
    onCreateInfoBoxItem {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool {
    onCreateSchool {
      accounts {
        items {
          createdAt
          id
          number
          permissions
          schoolAccountsId
          updatedAt
          usercount
          users {
            items {
              accountUsersId
              createdAt
              id
              number
              password
              updatedAt
              username
            }
            nextToken
          }
        }
        nextToken
      }
      createdAt
      id
      name
      number
      updatedAt
    }
  }
`;
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
      abbr
      courses {
        items {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      fullname
      id
      longdesc
      shortdesc
      shortname
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      accountUsersId
      createdAt
      id
      number
      password
      updatedAt
      username
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      courseID
      createdAt
      day
      id
      longdesc
      section {
        courseDescriptionsSectionsId
        createdAt
        desc
        descripition {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        name
        number
        updatedAt
      }
      shortdesc
      slug
      title
      updatedAt
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      createdAt
      id
      number
      permissions
      schoolAccountsId
      updatedAt
      usercount
      users {
        items {
          accountUsersId
          createdAt
          id
          number
          password
          updatedAt
          username
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      abbr
      courseDescriptionsId
      courseVisualsId
      courseid
      createdAt
      descriptions {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        longdesc
        sections {
          items {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          nextToken
        }
        shortdesc
        subtitle
        title
        updatedAt
      }
      id
      level
      test {
        abbr
        courses {
          items {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          nextToken
        }
        createdAt
        fullname
        id
        longdesc
        shortdesc
        shortname
        updatedAt
      }
      testCoursesId
      updatedAt
      videocount
      videos {
        items {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          courseID
          createdAt
          day
          id
          longdesc
          section {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          shortdesc
          slug
          title
          updatedAt
        }
        nextToken
      }
      visuals {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        themename
        tnurl
        updatedAt
      }
    }
  }
`;
export const onDeleteCourseDescriptions = /* GraphQL */ `
  subscription OnDeleteCourseDescriptions {
    onDeleteCourseDescriptions {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      createdAt
      id
      longdesc
      sections {
        items {
          courseDescriptionsSectionsId
          createdAt
          desc
          descripition {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          name
          number
          updatedAt
        }
        nextToken
      }
      shortdesc
      subtitle
      title
      updatedAt
    }
  }
`;
export const onDeleteCourseDescriptionsInfoBox = /* GraphQL */ `
  subscription OnDeleteCourseDescriptionsInfoBox {
    onDeleteCourseDescriptionsInfoBox {
      createdAt
      id
      items {
        items {
          courseDescriptionsInfoBoxItemsId
          createdAt
          icon
          id
          text
          updatedAt
        }
        nextToken
      }
      name
      updatedAt
    }
  }
`;
export const onDeleteCourseDescriptionsSection = /* GraphQL */ `
  subscription OnDeleteCourseDescriptionsSection {
    onDeleteCourseDescriptionsSection {
      courseDescriptionsSectionsId
      createdAt
      desc
      descripition {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        longdesc
        sections {
          items {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          nextToken
        }
        shortdesc
        subtitle
        title
        updatedAt
      }
      id
      name
      number
      updatedAt
    }
  }
`;
export const onDeleteCourseVisuals = /* GraphQL */ `
  subscription OnDeleteCourseVisuals {
    onDeleteCourseVisuals {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      createdAt
      id
      themename
      tnurl
      updatedAt
    }
  }
`;
export const onDeleteInfoBoxItem = /* GraphQL */ `
  subscription OnDeleteInfoBoxItem {
    onDeleteInfoBoxItem {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool {
    onDeleteSchool {
      accounts {
        items {
          createdAt
          id
          number
          permissions
          schoolAccountsId
          updatedAt
          usercount
          users {
            items {
              accountUsersId
              createdAt
              id
              number
              password
              updatedAt
              username
            }
            nextToken
          }
        }
        nextToken
      }
      createdAt
      id
      name
      number
      updatedAt
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
      abbr
      courses {
        items {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      fullname
      id
      longdesc
      shortdesc
      shortname
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      accountUsersId
      createdAt
      id
      number
      password
      updatedAt
      username
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      courseID
      createdAt
      day
      id
      longdesc
      section {
        courseDescriptionsSectionsId
        createdAt
        desc
        descripition {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        name
        number
        updatedAt
      }
      shortdesc
      slug
      title
      updatedAt
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      createdAt
      id
      number
      permissions
      schoolAccountsId
      updatedAt
      usercount
      users {
        items {
          accountUsersId
          createdAt
          id
          number
          password
          updatedAt
          username
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      abbr
      courseDescriptionsId
      courseVisualsId
      courseid
      createdAt
      descriptions {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        longdesc
        sections {
          items {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          nextToken
        }
        shortdesc
        subtitle
        title
        updatedAt
      }
      id
      level
      test {
        abbr
        courses {
          items {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          nextToken
        }
        createdAt
        fullname
        id
        longdesc
        shortdesc
        shortname
        updatedAt
      }
      testCoursesId
      updatedAt
      videocount
      videos {
        items {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          courseID
          createdAt
          day
          id
          longdesc
          section {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          shortdesc
          slug
          title
          updatedAt
        }
        nextToken
      }
      visuals {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        themename
        tnurl
        updatedAt
      }
    }
  }
`;
export const onUpdateCourseDescriptions = /* GraphQL */ `
  subscription OnUpdateCourseDescriptions {
    onUpdateCourseDescriptions {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      createdAt
      id
      longdesc
      sections {
        items {
          courseDescriptionsSectionsId
          createdAt
          desc
          descripition {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          name
          number
          updatedAt
        }
        nextToken
      }
      shortdesc
      subtitle
      title
      updatedAt
    }
  }
`;
export const onUpdateCourseDescriptionsInfoBox = /* GraphQL */ `
  subscription OnUpdateCourseDescriptionsInfoBox {
    onUpdateCourseDescriptionsInfoBox {
      createdAt
      id
      items {
        items {
          courseDescriptionsInfoBoxItemsId
          createdAt
          icon
          id
          text
          updatedAt
        }
        nextToken
      }
      name
      updatedAt
    }
  }
`;
export const onUpdateCourseDescriptionsSection = /* GraphQL */ `
  subscription OnUpdateCourseDescriptionsSection {
    onUpdateCourseDescriptionsSection {
      courseDescriptionsSectionsId
      createdAt
      desc
      descripition {
        course {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        createdAt
        id
        longdesc
        sections {
          items {
            courseDescriptionsSectionsId
            createdAt
            desc
            descripition {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            name
            number
            updatedAt
          }
          nextToken
        }
        shortdesc
        subtitle
        title
        updatedAt
      }
      id
      name
      number
      updatedAt
    }
  }
`;
export const onUpdateCourseVisuals = /* GraphQL */ `
  subscription OnUpdateCourseVisuals {
    onUpdateCourseVisuals {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      createdAt
      id
      themename
      tnurl
      updatedAt
    }
  }
`;
export const onUpdateInfoBoxItem = /* GraphQL */ `
  subscription OnUpdateInfoBoxItem {
    onUpdateInfoBoxItem {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool {
    onUpdateSchool {
      accounts {
        items {
          createdAt
          id
          number
          permissions
          schoolAccountsId
          updatedAt
          usercount
          users {
            items {
              accountUsersId
              createdAt
              id
              number
              password
              updatedAt
              username
            }
            nextToken
          }
        }
        nextToken
      }
      createdAt
      id
      name
      number
      updatedAt
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
      abbr
      courses {
        items {
          abbr
          courseDescriptionsId
          courseVisualsId
          courseid
          createdAt
          descriptions {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            longdesc
            sections {
              nextToken
            }
            shortdesc
            subtitle
            title
            updatedAt
          }
          id
          level
          test {
            abbr
            courses {
              nextToken
            }
            createdAt
            fullname
            id
            longdesc
            shortdesc
            shortname
            updatedAt
          }
          testCoursesId
          updatedAt
          videocount
          videos {
            items {
              courseID
              createdAt
              day
              id
              longdesc
              shortdesc
              slug
              title
              updatedAt
            }
            nextToken
          }
          visuals {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            createdAt
            id
            themename
            tnurl
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      fullname
      id
      longdesc
      shortdesc
      shortname
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      accountUsersId
      createdAt
      id
      number
      password
      updatedAt
      username
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
      course {
        abbr
        courseDescriptionsId
        courseVisualsId
        courseid
        createdAt
        descriptions {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        level
        test {
          abbr
          courses {
            items {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            nextToken
          }
          createdAt
          fullname
          id
          longdesc
          shortdesc
          shortname
          updatedAt
        }
        testCoursesId
        updatedAt
        videocount
        videos {
          items {
            course {
              abbr
              courseDescriptionsId
              courseVisualsId
              courseid
              createdAt
              id
              level
              testCoursesId
              updatedAt
              videocount
            }
            courseID
            createdAt
            day
            id
            longdesc
            section {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            shortdesc
            slug
            title
            updatedAt
          }
          nextToken
        }
        visuals {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          themename
          tnurl
          updatedAt
        }
      }
      courseID
      createdAt
      day
      id
      longdesc
      section {
        courseDescriptionsSectionsId
        createdAt
        desc
        descripition {
          course {
            abbr
            courseDescriptionsId
            courseVisualsId
            courseid
            createdAt
            descriptions {
              createdAt
              id
              longdesc
              shortdesc
              subtitle
              title
              updatedAt
            }
            id
            level
            test {
              abbr
              createdAt
              fullname
              id
              longdesc
              shortdesc
              shortname
              updatedAt
            }
            testCoursesId
            updatedAt
            videocount
            videos {
              nextToken
            }
            visuals {
              createdAt
              id
              themename
              tnurl
              updatedAt
            }
          }
          createdAt
          id
          longdesc
          sections {
            items {
              courseDescriptionsSectionsId
              createdAt
              desc
              id
              name
              number
              updatedAt
            }
            nextToken
          }
          shortdesc
          subtitle
          title
          updatedAt
        }
        id
        name
        number
        updatedAt
      }
      shortdesc
      slug
      title
      updatedAt
    }
  }
`;
