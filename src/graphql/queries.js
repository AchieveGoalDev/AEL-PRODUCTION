/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        number
        name
        accounts {
          items {
            number
            permissions
            usercount
            users {
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
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourseVisuals = /* GraphQL */ `
  query GetCourseVisuals($id: ID!) {
    getCourseVisuals(id: $id) {
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
export const listCourseVisuals = /* GraphQL */ `
  query ListCourseVisuals(
    $filter: ModelCourseVisualsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseVisuals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourseDescriptions = /* GraphQL */ `
  query GetCourseDescriptions($id: ID!) {
    getCourseDescriptions(id: $id) {
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
      nextToken
    }
  }
`;
export const getCourseDescriptionsSection = /* GraphQL */ `
  query GetCourseDescriptionsSection($id: ID!) {
    getCourseDescriptionsSection(id: $id) {
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
      nextToken
    }
  }
`;
export const getCourseDescriptionsInfoBox = /* GraphQL */ `
  query GetCourseDescriptionsInfoBox($id: ID!) {
    getCourseDescriptionsInfoBox(id: $id) {
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
      nextToken
    }
  }
`;
export const getInfoBoxItem = /* GraphQL */ `
  query GetInfoBoxItem($id: ID!) {
    getInfoBoxItem(id: $id) {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
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
        icon
        text
        id
        createdAt
        updatedAt
        courseDescriptionsInfoBoxItemsId
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        day
        title
        shortdesc
        longdesc
        slug
        section {
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
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
