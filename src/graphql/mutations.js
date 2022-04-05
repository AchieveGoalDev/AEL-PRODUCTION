/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
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
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
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
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
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
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
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
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createCourseVisuals = /* GraphQL */ `
  mutation CreateCourseVisuals(
    $input: CreateCourseVisualsInput!
    $condition: ModelCourseVisualsConditionInput
  ) {
    createCourseVisuals(input: $input, condition: $condition) {
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
export const updateCourseVisuals = /* GraphQL */ `
  mutation UpdateCourseVisuals(
    $input: UpdateCourseVisualsInput!
    $condition: ModelCourseVisualsConditionInput
  ) {
    updateCourseVisuals(input: $input, condition: $condition) {
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
export const deleteCourseVisuals = /* GraphQL */ `
  mutation DeleteCourseVisuals(
    $input: DeleteCourseVisualsInput!
    $condition: ModelCourseVisualsConditionInput
  ) {
    deleteCourseVisuals(input: $input, condition: $condition) {
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
export const createCourseDescriptions = /* GraphQL */ `
  mutation CreateCourseDescriptions(
    $input: CreateCourseDescriptionsInput!
    $condition: ModelCourseDescriptionsConditionInput
  ) {
    createCourseDescriptions(input: $input, condition: $condition) {
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
export const updateCourseDescriptions = /* GraphQL */ `
  mutation UpdateCourseDescriptions(
    $input: UpdateCourseDescriptionsInput!
    $condition: ModelCourseDescriptionsConditionInput
  ) {
    updateCourseDescriptions(input: $input, condition: $condition) {
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
export const deleteCourseDescriptions = /* GraphQL */ `
  mutation DeleteCourseDescriptions(
    $input: DeleteCourseDescriptionsInput!
    $condition: ModelCourseDescriptionsConditionInput
  ) {
    deleteCourseDescriptions(input: $input, condition: $condition) {
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
export const createCourseDescriptionsSection = /* GraphQL */ `
  mutation CreateCourseDescriptionsSection(
    $input: CreateCourseDescriptionsSectionInput!
    $condition: ModelCourseDescriptionsSectionConditionInput
  ) {
    createCourseDescriptionsSection(input: $input, condition: $condition) {
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
export const updateCourseDescriptionsSection = /* GraphQL */ `
  mutation UpdateCourseDescriptionsSection(
    $input: UpdateCourseDescriptionsSectionInput!
    $condition: ModelCourseDescriptionsSectionConditionInput
  ) {
    updateCourseDescriptionsSection(input: $input, condition: $condition) {
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
export const deleteCourseDescriptionsSection = /* GraphQL */ `
  mutation DeleteCourseDescriptionsSection(
    $input: DeleteCourseDescriptionsSectionInput!
    $condition: ModelCourseDescriptionsSectionConditionInput
  ) {
    deleteCourseDescriptionsSection(input: $input, condition: $condition) {
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
export const createCourseDescriptionsInfoBox = /* GraphQL */ `
  mutation CreateCourseDescriptionsInfoBox(
    $input: CreateCourseDescriptionsInfoBoxInput!
    $condition: ModelCourseDescriptionsInfoBoxConditionInput
  ) {
    createCourseDescriptionsInfoBox(input: $input, condition: $condition) {
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
export const updateCourseDescriptionsInfoBox = /* GraphQL */ `
  mutation UpdateCourseDescriptionsInfoBox(
    $input: UpdateCourseDescriptionsInfoBoxInput!
    $condition: ModelCourseDescriptionsInfoBoxConditionInput
  ) {
    updateCourseDescriptionsInfoBox(input: $input, condition: $condition) {
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
export const deleteCourseDescriptionsInfoBox = /* GraphQL */ `
  mutation DeleteCourseDescriptionsInfoBox(
    $input: DeleteCourseDescriptionsInfoBoxInput!
    $condition: ModelCourseDescriptionsInfoBoxConditionInput
  ) {
    deleteCourseDescriptionsInfoBox(input: $input, condition: $condition) {
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
export const createInfoBoxItem = /* GraphQL */ `
  mutation CreateInfoBoxItem(
    $input: CreateInfoBoxItemInput!
    $condition: ModelInfoBoxItemConditionInput
  ) {
    createInfoBoxItem(input: $input, condition: $condition) {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
    }
  }
`;
export const updateInfoBoxItem = /* GraphQL */ `
  mutation UpdateInfoBoxItem(
    $input: UpdateInfoBoxItemInput!
    $condition: ModelInfoBoxItemConditionInput
  ) {
    updateInfoBoxItem(input: $input, condition: $condition) {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
    }
  }
`;
export const deleteInfoBoxItem = /* GraphQL */ `
  mutation DeleteInfoBoxItem(
    $input: DeleteInfoBoxItemInput!
    $condition: ModelInfoBoxItemConditionInput
  ) {
    deleteInfoBoxItem(input: $input, condition: $condition) {
      icon
      text
      id
      createdAt
      updatedAt
      courseDescriptionsInfoBoxItemsId
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
