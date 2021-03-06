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

import Base from '../services/base';
import { GradeTypeEnum, ErrorsCategory } from '../services/constant';

class VueErrors extends Base {
  public handleErrors(options: {reportUrl: string; serviceName: string}, Vue: any) {
    Vue.config.errorHandler = (error: Error, vm: any, info: string) => {
      console.log(error);
      try {
        this.reportUrl = options.reportUrl;
        this.serviceName = options.serviceName;
        this.logInfo = {
          category: ErrorsCategory.VUE_ERROR,
          grade: GradeTypeEnum.ERROR,
          errorUrl: '',
          errorInfo: error,
          message: info,
        };
        this.traceInfo();
      } catch (error) {
        throw error;
      }
    };
  }
}

export default new VueErrors();
