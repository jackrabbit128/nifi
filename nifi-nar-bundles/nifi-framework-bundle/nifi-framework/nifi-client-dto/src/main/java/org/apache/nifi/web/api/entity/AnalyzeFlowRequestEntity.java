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
package org.apache.nifi.web.api.entity;

import org.apache.nifi.web.api.dto.AnalyzeFlowRequestDTO;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * A serialized representation of this class can be placed in the entity body of a request or response to or from the API. This particular entity holds a reference to an AnalyzeRequestDTO.
 */
@XmlRootElement(name = "dropRequestEntity")
public class AnalyzeFlowRequestEntity extends Entity {

    private AnalyzeFlowRequestDTO analyzeFlowRequest;

    /**
     * The AnalyzeFlowRequestDTO that is being serialized.
     *
     * @return The AnalyzeFlowRequestDTO object
     */
    public AnalyzeFlowRequestDTO getAnalyzeFlowRequest() {
        return analyzeFlowRequest;
    }

    public void setAnalyzeFlowRequest(AnalyzeFlowRequestDTO analyzeFlowRequest) {
        this.analyzeFlowRequest = analyzeFlowRequest;
    }

}
