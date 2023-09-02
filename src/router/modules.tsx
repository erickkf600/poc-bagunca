import React, { Suspense, lazy } from 'react'
import { Text, View } from 'react-native';
function LazyImport(Component: any) {
    const ComponentLoadable = lazy(Component)
    return (props: any) => (
        <Suspense fallback={
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 35 }}>Loading</Text>
            </View>
        }>
            <ComponentLoadable {...props} />
        </Suspense>
    );
}

export default LazyImport
//LAZY LOAD MODULES
export const Login = LazyImport(() => import('./../pages/Login'/* webpackChunkName: 'login' */))

export const HomeT = LazyImport(() => import('./../pages/Home'/* webpackChunkName: 'home' */))
export const Locations = LazyImport(() => import('./../pages/Locations'/* webpackChunkName: 'locations' */))
export const Shedule = LazyImport(() => import('./../pages/Shedule'/* webpackChunkName: 'shedule' */))
export const Profile = LazyImport(() => import('./../pages/Profile'/* webpackChunkName: 'profile' */))
