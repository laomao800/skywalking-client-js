/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface TraceFields {
  serviceName: string;
  errorInfo: errorInfoFeilds;
  performanceInfo?: performanceInfoFields;
  resources?: any;
  pageId?: string;
  deviceInfo?: any;
}
export interface performanceInfoFields {
  redirectTime: string;
  dnsTime: string;
  reqTime: string;
  analysisTime: string;
  blankTime: string;
  domReadyTime: string;
  loadPage: string;
}

export interface errorInfoFeilds {
  category: string;
  grade: string;
  message: any;
  errorUrl: string;
  line?: number; 
  col?: number;
  errorInfo?: any;
}
