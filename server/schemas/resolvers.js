const { User, Haircut } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('haircuts');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('haircuts');
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('haircuts');
          }
    },
    
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          addHaircut: async (parent, args, context) => {
            if (context.user) {
              const haircut = await Haircut.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { haircuts: haircut._id } },
                { new: true }
              );
      
              return haircut;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          deleteHaircut: async (parent, { text }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { username: context.user.username },
                { $pull: { haircuts: { haircutText: text }}},
                { new: true }
              );

              return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
          }
    },
};

module.exports = resolvers;
