import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='text-info text-center'> Difference between authorization and authentication</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th className='text-info text-center'>Authentication</th>
                            <th className='text-info text-center'>Authorization</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.
                            </td>

                        </tr>
                        <tr>

                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	</td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.
                            </td>

                        </tr>
                        <tr>

                            <td>Authentication is the first step of a good identity and access management process.	</td>
                            <td>@Authorization always takes place after authentication.
                            </td>
                        </tr>
                        <tr>
                            <td>Authentication is visible to and partially changeable by the user.	</td>
                            <td>Authorization isn’t visible to or changeable by the user.
                            </td>
                        </tr>
                        <tr>
                            <td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.

                            </td>
                            <td>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-4 mb-4'>
                <h2 className='text-start text-info'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='container mt-4'>
                    For most developers, building an authentication system for your app can feel a lot like paying taxes. They are both relatively hard to understand tasks that you have no choice but doing, and could have big consequences if you get them wrong. No one ever started a company to pay taxes and no one ever built an app just so they could create a great login system. They just seem to be inescapable costs.

                    But now, you can at least free yourself from the auth tax. With Firebase Authentication, you can outsource your entire authentication system to Firebase so that you can concentrate on building great features for your app. Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. It offers a straightforward getting started experience, optional UX components designed to minimize user friction, and is built on open standards and backed by Google infrastructure.

                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    <h4 className='mt-3'>Some Firebase Alternatives:</h4>
                    <ul>
                        <li>Parse</li>
                        <li>Back4pp</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>
                    </ul>
                </p>
            </div>
            <div className='container mt-3'>
                <h2 className='text-info text-start'>What other services does firebase provide other than authentication?</h2>
                <p className='mt-4'>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.

                    This article purely focuses on how firebase services can make the  application development process easier.

                    We know that the widely used services for this purpose are Cloud Messaging, Authentication, Dynamic Links, Predictions, Google Analytics, and Remote Config. Let’s discuss these services in other than authentication in details:</p>
                <h4>Cloud Messaging</h4>
                <p>Everyone needs notifications in their applications in one way or another, for enhanced engagement with their users.

                    Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle your requests. Moreover, you won’t be charged a penny for using this service as it’s free of charge.</p>
                <h4>Google Analytics</h4>
                <p>Yet another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.

                    The service provides visualization of all this information on just a single tap. Many of you might be used to this service, as it is widely used in web applications as well. This one is free too.</p>

                <h4>Dynamic Links</h4>
                <p>This service was called google URL shortener in the past, but now it is renamed as Dynamic Links. In addition to their name, a couple of new features have been added to this service by Firebase Team.

                    This service is majorly used to generate deep links that redirect user traffic to your landing page, website, or mobile applications. They also provide custom domain names. And if you have your domain name, this service can be integrated with that, as well.

                </p>
                <h4>Remote Config
                </h4>
                <p>The last service that we’ll go through is Remote Config. It helps in remotely changing your application UI and content, without publishing it again.

                    For example, if you have published an application on the stores with provocative words in the static content, but it could not be managed from the back-end. And a lot of users have downloaded the app, then how can you avoid this situation of embarrassment?

                    If it is a normal application, then you can proceed to the process of changing and publishing the application which will take at least a week. But with Remote Config, you can change that content with a single click. More cases of this service can help you moderate the difficulty level of your game application, for a particular user group, without changing its code. Here, I have to mention that you still need to code accordingly</p>

            </div>
        </div>
    );
};

export default Blogs;