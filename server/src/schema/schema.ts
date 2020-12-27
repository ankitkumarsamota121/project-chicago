import * as graphql from 'graphql';
import axios from 'axios';
import UserModel, { User } from '../models/User';
import { resolve } from 'path';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { username: { type: GraphQLString } },
      async resolve(parentvalue, args) {
        const user = await UserModel.findOne({ username: args.username });
        return user;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLString },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parentValue, { firstName, lastName, username, password }) {
        const user = await UserModel.create({ firstName, lastName, username, password });
        await user.save();
        return user;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
