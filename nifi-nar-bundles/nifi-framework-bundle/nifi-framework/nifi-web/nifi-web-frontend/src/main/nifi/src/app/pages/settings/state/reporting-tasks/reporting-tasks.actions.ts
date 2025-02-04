/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createAction, props } from '@ngrx/store';
import {
    CreateReportingTaskRequest,
    CreateReportingTaskSuccess,
    DeleteReportingTaskRequest,
    DeleteReportingTaskSuccess,
    LoadReportingTasksResponse,
    SelectReportingTaskRequest,
    StartReportingTaskRequest,
    StartReportingTaskSuccess,
    StopReportingTaskRequest,
    StopReportingTaskSuccess
} from './index';

export const resetReportingTasksState = createAction('[Reporting Tasks] Reset Reporting Tasks State');

export const loadReportingTasks = createAction('[Reporting Tasks] Load Reporting Tasks');

export const loadReportingTasksSuccess = createAction(
    '[Reporting Tasks] Load Reporting Tasks Success',
    props<{ response: LoadReportingTasksResponse }>()
);

export const reportingTasksApiError = createAction(
    '[Reporting Tasks] Load Reporting Tasks Error',
    props<{ error: string }>()
);

export const openNewReportingTaskDialog = createAction('[Reporting Tasks] Open New Reporting Task Dialog');

export const createReportingTask = createAction(
    '[Reporting Tasks] Create Reporting Task',
    props<{ request: CreateReportingTaskRequest }>()
);

export const createReportingTaskSuccess = createAction(
    '[Reporting Tasks] Create Reporting Task Success',
    props<{ response: CreateReportingTaskSuccess }>()
);

export const startReportingTask = createAction(
    '[Reporting Tasks] Start Reporting Task',
    props<{ request: StartReportingTaskRequest }>()
);

export const startReportingTaskSuccess = createAction(
    '[Reporting Tasks] Start Reporting Task Success',
    props<{ response: StartReportingTaskSuccess }>()
);

export const stopReportingTask = createAction(
    '[Reporting Tasks] Stop Reporting Task',
    props<{ request: StopReportingTaskRequest }>()
);

export const stopReportingTaskSuccess = createAction(
    '[Reporting Tasks] Stop Reporting Task Success',
    props<{ response: StopReportingTaskSuccess }>()
);

export const promptReportingTaskDeletion = createAction(
    '[Reporting Tasks] Prompt Reporting Task Deletion',
    props<{ request: DeleteReportingTaskRequest }>()
);

export const deleteReportingTask = createAction(
    '[Reporting Tasks] Delete Reporting Task',
    props<{ request: DeleteReportingTaskRequest }>()
);

export const deleteReportingTaskSuccess = createAction(
    '[Reporting Tasks] Delete Reporting Task Success',
    props<{ response: DeleteReportingTaskSuccess }>()
);

export const selectReportingTask = createAction(
    '[Reporting Tasks] Select Reporting Task',
    props<{ request: SelectReportingTaskRequest }>()
);
