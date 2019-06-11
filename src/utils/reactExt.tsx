/**
 * 常用工具
 */

 import * as React from 'react'
 import RHeader from '@components/Header'

 export class ComponentExt<P={}, S={}> extends React.Component<P, S> {
     $header = RHeader
 }