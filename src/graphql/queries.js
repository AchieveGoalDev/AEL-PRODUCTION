/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const getCourseDescriptions = /* GraphQL */ `
  query GetCourseDescriptions($id: ID!) {
    getCourseDescriptions(id: $id) {
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
export const getCourseDescriptionsInfoBox = /* GraphQL */ `
  query GetCourseDescriptionsInfoBox($id: ID!) {
    getCourseDescriptionsInfoBox(id: $id) {
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
export const getCourseDescriptionsSection = /* GraphQL */ `
  query GetCourseDescriptionsSection($id: ID!) {
    getCourseDescriptionsSection(id: $id) {
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
export const getCourseVisuals = /* GraphQL */ `
  query GetCourseVisuals($id: ID!) {
    getCourseVisuals(id: $id) {
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
export const getInfoBoxItem = /* GraphQL */ `
  query GetInfoBoxItem($id: ID!) {
    getInfoBoxItem(id: $id) {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listCourseDescriptions = /* GraphQL */ `
  query ListCourseDescriptions(
    $filter: ModelCourseDescriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCourseDescriptionsInfoBoxes = /* GraphQL */ `
  query ListCourseDescriptionsInfoBoxes(
    $filter: ModelCourseDescriptionsInfoBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseDescriptionsInfoBoxes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCourseDescriptionsSections = /* GraphQL */ `
  query ListCourseDescriptionsSections(
    $filter: ModelCourseDescriptionsSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseDescriptionsSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
export const listCourseVisuals = /* GraphQL */ `
  query ListCourseVisuals(
    $filter: ModelCourseVisualsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseVisuals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const listInfoBoxItems = /* GraphQL */ `
  query ListInfoBoxItems(
    $filter: ModelInfoBoxItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfoBoxItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        shortdesc
        slug
        title
        updatedAt
      }
      nextToken
    }
  }
`;
