/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $condition: ModelAccountConditionInput
    $input: CreateAccountInput!
  ) {
    createAccount(condition: $condition, input: $input) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $condition: ModelCourseConditionInput
    $input: CreateCourseInput!
  ) {
    createCourse(condition: $condition, input: $input) {
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
export const createCourseDescriptions = /* GraphQL */ `
  mutation CreateCourseDescriptions(
    $condition: ModelCourseDescriptionsConditionInput
    $input: CreateCourseDescriptionsInput!
  ) {
    createCourseDescriptions(condition: $condition, input: $input) {
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
export const createCourseDescriptionsInfoBox = /* GraphQL */ `
  mutation CreateCourseDescriptionsInfoBox(
    $condition: ModelCourseDescriptionsInfoBoxConditionInput
    $input: CreateCourseDescriptionsInfoBoxInput!
  ) {
    createCourseDescriptionsInfoBox(condition: $condition, input: $input) {
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
export const createCourseDescriptionsSection = /* GraphQL */ `
  mutation CreateCourseDescriptionsSection(
    $condition: ModelCourseDescriptionsSectionConditionInput
    $input: CreateCourseDescriptionsSectionInput!
  ) {
    createCourseDescriptionsSection(condition: $condition, input: $input) {
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
export const createCourseVisuals = /* GraphQL */ `
  mutation CreateCourseVisuals(
    $condition: ModelCourseVisualsConditionInput
    $input: CreateCourseVisualsInput!
  ) {
    createCourseVisuals(condition: $condition, input: $input) {
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
export const createInfoBoxItem = /* GraphQL */ `
  mutation CreateInfoBoxItem(
    $condition: ModelInfoBoxItemConditionInput
    $input: CreateInfoBoxItemInput!
  ) {
    createInfoBoxItem(condition: $condition, input: $input) {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $condition: ModelSchoolConditionInput
    $input: CreateSchoolInput!
  ) {
    createSchool(condition: $condition, input: $input) {
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
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $condition: ModelTestConditionInput
    $input: CreateTestInput!
  ) {
    createTest(condition: $condition, input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $condition: ModelVideoConditionInput
    $input: CreateVideoInput!
  ) {
    createVideo(condition: $condition, input: $input) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $condition: ModelAccountConditionInput
    $input: DeleteAccountInput!
  ) {
    deleteAccount(condition: $condition, input: $input) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $condition: ModelCourseConditionInput
    $input: DeleteCourseInput!
  ) {
    deleteCourse(condition: $condition, input: $input) {
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
export const deleteCourseDescriptions = /* GraphQL */ `
  mutation DeleteCourseDescriptions(
    $condition: ModelCourseDescriptionsConditionInput
    $input: DeleteCourseDescriptionsInput!
  ) {
    deleteCourseDescriptions(condition: $condition, input: $input) {
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
export const deleteCourseDescriptionsInfoBox = /* GraphQL */ `
  mutation DeleteCourseDescriptionsInfoBox(
    $condition: ModelCourseDescriptionsInfoBoxConditionInput
    $input: DeleteCourseDescriptionsInfoBoxInput!
  ) {
    deleteCourseDescriptionsInfoBox(condition: $condition, input: $input) {
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
export const deleteCourseDescriptionsSection = /* GraphQL */ `
  mutation DeleteCourseDescriptionsSection(
    $condition: ModelCourseDescriptionsSectionConditionInput
    $input: DeleteCourseDescriptionsSectionInput!
  ) {
    deleteCourseDescriptionsSection(condition: $condition, input: $input) {
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
export const deleteCourseVisuals = /* GraphQL */ `
  mutation DeleteCourseVisuals(
    $condition: ModelCourseVisualsConditionInput
    $input: DeleteCourseVisualsInput!
  ) {
    deleteCourseVisuals(condition: $condition, input: $input) {
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
export const deleteInfoBoxItem = /* GraphQL */ `
  mutation DeleteInfoBoxItem(
    $condition: ModelInfoBoxItemConditionInput
    $input: DeleteInfoBoxItemInput!
  ) {
    deleteInfoBoxItem(condition: $condition, input: $input) {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $condition: ModelSchoolConditionInput
    $input: DeleteSchoolInput!
  ) {
    deleteSchool(condition: $condition, input: $input) {
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
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $condition: ModelTestConditionInput
    $input: DeleteTestInput!
  ) {
    deleteTest(condition: $condition, input: $input) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $condition: ModelVideoConditionInput
    $input: DeleteVideoInput!
  ) {
    deleteVideo(condition: $condition, input: $input) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $condition: ModelAccountConditionInput
    $input: UpdateAccountInput!
  ) {
    updateAccount(condition: $condition, input: $input) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $condition: ModelCourseConditionInput
    $input: UpdateCourseInput!
  ) {
    updateCourse(condition: $condition, input: $input) {
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
export const updateCourseDescriptions = /* GraphQL */ `
  mutation UpdateCourseDescriptions(
    $condition: ModelCourseDescriptionsConditionInput
    $input: UpdateCourseDescriptionsInput!
  ) {
    updateCourseDescriptions(condition: $condition, input: $input) {
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
export const updateCourseDescriptionsInfoBox = /* GraphQL */ `
  mutation UpdateCourseDescriptionsInfoBox(
    $condition: ModelCourseDescriptionsInfoBoxConditionInput
    $input: UpdateCourseDescriptionsInfoBoxInput!
  ) {
    updateCourseDescriptionsInfoBox(condition: $condition, input: $input) {
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
export const updateCourseDescriptionsSection = /* GraphQL */ `
  mutation UpdateCourseDescriptionsSection(
    $condition: ModelCourseDescriptionsSectionConditionInput
    $input: UpdateCourseDescriptionsSectionInput!
  ) {
    updateCourseDescriptionsSection(condition: $condition, input: $input) {
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
export const updateCourseVisuals = /* GraphQL */ `
  mutation UpdateCourseVisuals(
    $condition: ModelCourseVisualsConditionInput
    $input: UpdateCourseVisualsInput!
  ) {
    updateCourseVisuals(condition: $condition, input: $input) {
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
export const updateInfoBoxItem = /* GraphQL */ `
  mutation UpdateInfoBoxItem(
    $condition: ModelInfoBoxItemConditionInput
    $input: UpdateInfoBoxItemInput!
  ) {
    updateInfoBoxItem(condition: $condition, input: $input) {
      courseDescriptionsInfoBoxItemsId
      createdAt
      icon
      id
      text
      updatedAt
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $condition: ModelSchoolConditionInput
    $input: UpdateSchoolInput!
  ) {
    updateSchool(condition: $condition, input: $input) {
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
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $condition: ModelTestConditionInput
    $input: UpdateTestInput!
  ) {
    updateTest(condition: $condition, input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $condition: ModelVideoConditionInput
    $input: UpdateVideoInput!
  ) {
    updateVideo(condition: $condition, input: $input) {
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
