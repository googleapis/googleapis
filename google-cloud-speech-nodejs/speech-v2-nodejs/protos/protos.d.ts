// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace speech. */
        namespace speech {

            /** Namespace v2. */
            namespace v2 {

                /** Represents a Speech */
                class Speech extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Speech service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Speech service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Speech;

                    /**
                     * Calls CreateRecognizer.
                     * @param request CreateRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRecognizer(request: google.cloud.speech.v2.ICreateRecognizerRequest, callback: google.cloud.speech.v2.Speech.CreateRecognizerCallback): void;

                    /**
                     * Calls CreateRecognizer.
                     * @param request CreateRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public createRecognizer(request: google.cloud.speech.v2.ICreateRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRecognizers.
                     * @param request ListRecognizersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecognizersResponse
                     */
                    public listRecognizers(request: google.cloud.speech.v2.IListRecognizersRequest, callback: google.cloud.speech.v2.Speech.ListRecognizersCallback): void;

                    /**
                     * Calls ListRecognizers.
                     * @param request ListRecognizersRequest message or plain object
                     * @returns Promise
                     */
                    public listRecognizers(request: google.cloud.speech.v2.IListRecognizersRequest): Promise<google.cloud.speech.v2.ListRecognizersResponse>;

                    /**
                     * Calls GetRecognizer.
                     * @param request GetRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recognizer
                     */
                    public getRecognizer(request: google.cloud.speech.v2.IGetRecognizerRequest, callback: google.cloud.speech.v2.Speech.GetRecognizerCallback): void;

                    /**
                     * Calls GetRecognizer.
                     * @param request GetRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public getRecognizer(request: google.cloud.speech.v2.IGetRecognizerRequest): Promise<google.cloud.speech.v2.Recognizer>;

                    /**
                     * Calls UpdateRecognizer.
                     * @param request UpdateRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRecognizer(request: google.cloud.speech.v2.IUpdateRecognizerRequest, callback: google.cloud.speech.v2.Speech.UpdateRecognizerCallback): void;

                    /**
                     * Calls UpdateRecognizer.
                     * @param request UpdateRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public updateRecognizer(request: google.cloud.speech.v2.IUpdateRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRecognizer.
                     * @param request DeleteRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRecognizer(request: google.cloud.speech.v2.IDeleteRecognizerRequest, callback: google.cloud.speech.v2.Speech.DeleteRecognizerCallback): void;

                    /**
                     * Calls DeleteRecognizer.
                     * @param request DeleteRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRecognizer(request: google.cloud.speech.v2.IDeleteRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeleteRecognizer.
                     * @param request UndeleteRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeleteRecognizer(request: google.cloud.speech.v2.IUndeleteRecognizerRequest, callback: google.cloud.speech.v2.Speech.UndeleteRecognizerCallback): void;

                    /**
                     * Calls UndeleteRecognizer.
                     * @param request UndeleteRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public undeleteRecognizer(request: google.cloud.speech.v2.IUndeleteRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls Recognize.
                     * @param request RecognizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RecognizeResponse
                     */
                    public recognize(request: google.cloud.speech.v2.IRecognizeRequest, callback: google.cloud.speech.v2.Speech.RecognizeCallback): void;

                    /**
                     * Calls Recognize.
                     * @param request RecognizeRequest message or plain object
                     * @returns Promise
                     */
                    public recognize(request: google.cloud.speech.v2.IRecognizeRequest): Promise<google.cloud.speech.v2.RecognizeResponse>;

                    /**
                     * Calls StreamingRecognize.
                     * @param request StreamingRecognizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and StreamingRecognizeResponse
                     */
                    public streamingRecognize(request: google.cloud.speech.v2.IStreamingRecognizeRequest, callback: google.cloud.speech.v2.Speech.StreamingRecognizeCallback): void;

                    /**
                     * Calls StreamingRecognize.
                     * @param request StreamingRecognizeRequest message or plain object
                     * @returns Promise
                     */
                    public streamingRecognize(request: google.cloud.speech.v2.IStreamingRecognizeRequest): Promise<google.cloud.speech.v2.StreamingRecognizeResponse>;

                    /**
                     * Calls BatchRecognize.
                     * @param request BatchRecognizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchRecognize(request: google.cloud.speech.v2.IBatchRecognizeRequest, callback: google.cloud.speech.v2.Speech.BatchRecognizeCallback): void;

                    /**
                     * Calls BatchRecognize.
                     * @param request BatchRecognizeRequest message or plain object
                     * @returns Promise
                     */
                    public batchRecognize(request: google.cloud.speech.v2.IBatchRecognizeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetConfig.
                     * @param request GetConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Config
                     */
                    public getConfig(request: google.cloud.speech.v2.IGetConfigRequest, callback: google.cloud.speech.v2.Speech.GetConfigCallback): void;

                    /**
                     * Calls GetConfig.
                     * @param request GetConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getConfig(request: google.cloud.speech.v2.IGetConfigRequest): Promise<google.cloud.speech.v2.Config>;

                    /**
                     * Calls UpdateConfig.
                     * @param request UpdateConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Config
                     */
                    public updateConfig(request: google.cloud.speech.v2.IUpdateConfigRequest, callback: google.cloud.speech.v2.Speech.UpdateConfigCallback): void;

                    /**
                     * Calls UpdateConfig.
                     * @param request UpdateConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateConfig(request: google.cloud.speech.v2.IUpdateConfigRequest): Promise<google.cloud.speech.v2.Config>;

                    /**
                     * Calls CreateCustomClass.
                     * @param request CreateCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCustomClass(request: google.cloud.speech.v2.ICreateCustomClassRequest, callback: google.cloud.speech.v2.Speech.CreateCustomClassCallback): void;

                    /**
                     * Calls CreateCustomClass.
                     * @param request CreateCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public createCustomClass(request: google.cloud.speech.v2.ICreateCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCustomClasses.
                     * @param request ListCustomClassesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCustomClassesResponse
                     */
                    public listCustomClasses(request: google.cloud.speech.v2.IListCustomClassesRequest, callback: google.cloud.speech.v2.Speech.ListCustomClassesCallback): void;

                    /**
                     * Calls ListCustomClasses.
                     * @param request ListCustomClassesRequest message or plain object
                     * @returns Promise
                     */
                    public listCustomClasses(request: google.cloud.speech.v2.IListCustomClassesRequest): Promise<google.cloud.speech.v2.ListCustomClassesResponse>;

                    /**
                     * Calls GetCustomClass.
                     * @param request GetCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CustomClass
                     */
                    public getCustomClass(request: google.cloud.speech.v2.IGetCustomClassRequest, callback: google.cloud.speech.v2.Speech.GetCustomClassCallback): void;

                    /**
                     * Calls GetCustomClass.
                     * @param request GetCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public getCustomClass(request: google.cloud.speech.v2.IGetCustomClassRequest): Promise<google.cloud.speech.v2.CustomClass>;

                    /**
                     * Calls UpdateCustomClass.
                     * @param request UpdateCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCustomClass(request: google.cloud.speech.v2.IUpdateCustomClassRequest, callback: google.cloud.speech.v2.Speech.UpdateCustomClassCallback): void;

                    /**
                     * Calls UpdateCustomClass.
                     * @param request UpdateCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public updateCustomClass(request: google.cloud.speech.v2.IUpdateCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCustomClass.
                     * @param request DeleteCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCustomClass(request: google.cloud.speech.v2.IDeleteCustomClassRequest, callback: google.cloud.speech.v2.Speech.DeleteCustomClassCallback): void;

                    /**
                     * Calls DeleteCustomClass.
                     * @param request DeleteCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCustomClass(request: google.cloud.speech.v2.IDeleteCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeleteCustomClass.
                     * @param request UndeleteCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeleteCustomClass(request: google.cloud.speech.v2.IUndeleteCustomClassRequest, callback: google.cloud.speech.v2.Speech.UndeleteCustomClassCallback): void;

                    /**
                     * Calls UndeleteCustomClass.
                     * @param request UndeleteCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public undeleteCustomClass(request: google.cloud.speech.v2.IUndeleteCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreatePhraseSet.
                     * @param request CreatePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPhraseSet(request: google.cloud.speech.v2.ICreatePhraseSetRequest, callback: google.cloud.speech.v2.Speech.CreatePhraseSetCallback): void;

                    /**
                     * Calls CreatePhraseSet.
                     * @param request CreatePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public createPhraseSet(request: google.cloud.speech.v2.ICreatePhraseSetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListPhraseSets.
                     * @param request ListPhraseSetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPhraseSetsResponse
                     */
                    public listPhraseSets(request: google.cloud.speech.v2.IListPhraseSetsRequest, callback: google.cloud.speech.v2.Speech.ListPhraseSetsCallback): void;

                    /**
                     * Calls ListPhraseSets.
                     * @param request ListPhraseSetsRequest message or plain object
                     * @returns Promise
                     */
                    public listPhraseSets(request: google.cloud.speech.v2.IListPhraseSetsRequest): Promise<google.cloud.speech.v2.ListPhraseSetsResponse>;

                    /**
                     * Calls GetPhraseSet.
                     * @param request GetPhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PhraseSet
                     */
                    public getPhraseSet(request: google.cloud.speech.v2.IGetPhraseSetRequest, callback: google.cloud.speech.v2.Speech.GetPhraseSetCallback): void;

                    /**
                     * Calls GetPhraseSet.
                     * @param request GetPhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public getPhraseSet(request: google.cloud.speech.v2.IGetPhraseSetRequest): Promise<google.cloud.speech.v2.PhraseSet>;

                    /**
                     * Calls UpdatePhraseSet.
                     * @param request UpdatePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePhraseSet(request: google.cloud.speech.v2.IUpdatePhraseSetRequest, callback: google.cloud.speech.v2.Speech.UpdatePhraseSetCallback): void;

                    /**
                     * Calls UpdatePhraseSet.
                     * @param request UpdatePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public updatePhraseSet(request: google.cloud.speech.v2.IUpdatePhraseSetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePhraseSet.
                     * @param request DeletePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePhraseSet(request: google.cloud.speech.v2.IDeletePhraseSetRequest, callback: google.cloud.speech.v2.Speech.DeletePhraseSetCallback): void;

                    /**
                     * Calls DeletePhraseSet.
                     * @param request DeletePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public deletePhraseSet(request: google.cloud.speech.v2.IDeletePhraseSetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeletePhraseSet.
                     * @param request UndeletePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeletePhraseSet(request: google.cloud.speech.v2.IUndeletePhraseSetRequest, callback: google.cloud.speech.v2.Speech.UndeletePhraseSetCallback): void;

                    /**
                     * Calls UndeletePhraseSet.
                     * @param request UndeletePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public undeletePhraseSet(request: google.cloud.speech.v2.IUndeletePhraseSetRequest): Promise<google.longrunning.Operation>;
                }

                namespace Speech {

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|createRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|listRecognizers}.
                     * @param error Error, if any
                     * @param [response] ListRecognizersResponse
                     */
                    type ListRecognizersCallback = (error: (Error|null), response?: google.cloud.speech.v2.ListRecognizersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getRecognizer}.
                     * @param error Error, if any
                     * @param [response] Recognizer
                     */
                    type GetRecognizerCallback = (error: (Error|null), response?: google.cloud.speech.v2.Recognizer) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updateRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|deleteRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|undeleteRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeleteRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|recognize}.
                     * @param error Error, if any
                     * @param [response] RecognizeResponse
                     */
                    type RecognizeCallback = (error: (Error|null), response?: google.cloud.speech.v2.RecognizeResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|streamingRecognize}.
                     * @param error Error, if any
                     * @param [response] StreamingRecognizeResponse
                     */
                    type StreamingRecognizeCallback = (error: (Error|null), response?: google.cloud.speech.v2.StreamingRecognizeResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|batchRecognize}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchRecognizeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getConfig}.
                     * @param error Error, if any
                     * @param [response] Config
                     */
                    type GetConfigCallback = (error: (Error|null), response?: google.cloud.speech.v2.Config) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updateConfig}.
                     * @param error Error, if any
                     * @param [response] Config
                     */
                    type UpdateConfigCallback = (error: (Error|null), response?: google.cloud.speech.v2.Config) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|createCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|listCustomClasses}.
                     * @param error Error, if any
                     * @param [response] ListCustomClassesResponse
                     */
                    type ListCustomClassesCallback = (error: (Error|null), response?: google.cloud.speech.v2.ListCustomClassesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getCustomClass}.
                     * @param error Error, if any
                     * @param [response] CustomClass
                     */
                    type GetCustomClassCallback = (error: (Error|null), response?: google.cloud.speech.v2.CustomClass) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updateCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|deleteCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|undeleteCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeleteCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|createPhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|listPhraseSets}.
                     * @param error Error, if any
                     * @param [response] ListPhraseSetsResponse
                     */
                    type ListPhraseSetsCallback = (error: (Error|null), response?: google.cloud.speech.v2.ListPhraseSetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getPhraseSet}.
                     * @param error Error, if any
                     * @param [response] PhraseSet
                     */
                    type GetPhraseSetCallback = (error: (Error|null), response?: google.cloud.speech.v2.PhraseSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updatePhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|deletePhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|undeletePhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeletePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a CreateRecognizerRequest. */
                interface ICreateRecognizerRequest {

                    /** CreateRecognizerRequest recognizer */
                    recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** CreateRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreateRecognizerRequest recognizerId */
                    recognizerId?: (string|null);

                    /** CreateRecognizerRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreateRecognizerRequest. */
                class CreateRecognizerRequest implements ICreateRecognizerRequest {

                    /**
                     * Constructs a new CreateRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICreateRecognizerRequest);

                    /** CreateRecognizerRequest recognizer. */
                    public recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** CreateRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreateRecognizerRequest recognizerId. */
                    public recognizerId: string;

                    /** CreateRecognizerRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreateRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICreateRecognizerRequest): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Encodes the specified CreateRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.CreateRecognizerRequest.verify|verify} messages.
                     * @param message CreateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICreateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CreateRecognizerRequest.verify|verify} messages.
                     * @param message CreateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICreateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Decodes a CreateRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Verifies a CreateRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Creates a plain object from a CreateRecognizerRequest message. Also converts values to other types if specified.
                     * @param message CreateRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CreateRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata resource */
                    resource?: (string|null);

                    /** OperationMetadata method */
                    method?: (string|null);

                    /** OperationMetadata kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** OperationMetadata kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);

                    /** OperationMetadata batchRecognizeRequest */
                    batchRecognizeRequest?: (google.cloud.speech.v2.IBatchRecognizeRequest|null);

                    /** OperationMetadata createRecognizerRequest */
                    createRecognizerRequest?: (google.cloud.speech.v2.ICreateRecognizerRequest|null);

                    /** OperationMetadata updateRecognizerRequest */
                    updateRecognizerRequest?: (google.cloud.speech.v2.IUpdateRecognizerRequest|null);

                    /** OperationMetadata deleteRecognizerRequest */
                    deleteRecognizerRequest?: (google.cloud.speech.v2.IDeleteRecognizerRequest|null);

                    /** OperationMetadata undeleteRecognizerRequest */
                    undeleteRecognizerRequest?: (google.cloud.speech.v2.IUndeleteRecognizerRequest|null);

                    /** OperationMetadata createCustomClassRequest */
                    createCustomClassRequest?: (google.cloud.speech.v2.ICreateCustomClassRequest|null);

                    /** OperationMetadata updateCustomClassRequest */
                    updateCustomClassRequest?: (google.cloud.speech.v2.IUpdateCustomClassRequest|null);

                    /** OperationMetadata deleteCustomClassRequest */
                    deleteCustomClassRequest?: (google.cloud.speech.v2.IDeleteCustomClassRequest|null);

                    /** OperationMetadata undeleteCustomClassRequest */
                    undeleteCustomClassRequest?: (google.cloud.speech.v2.IUndeleteCustomClassRequest|null);

                    /** OperationMetadata createPhraseSetRequest */
                    createPhraseSetRequest?: (google.cloud.speech.v2.ICreatePhraseSetRequest|null);

                    /** OperationMetadata updatePhraseSetRequest */
                    updatePhraseSetRequest?: (google.cloud.speech.v2.IUpdatePhraseSetRequest|null);

                    /** OperationMetadata deletePhraseSetRequest */
                    deletePhraseSetRequest?: (google.cloud.speech.v2.IDeletePhraseSetRequest|null);

                    /** OperationMetadata undeletePhraseSetRequest */
                    undeletePhraseSetRequest?: (google.cloud.speech.v2.IUndeletePhraseSetRequest|null);

                    /** OperationMetadata updateConfigRequest */
                    updateConfigRequest?: (google.cloud.speech.v2.IUpdateConfigRequest|null);

                    /** OperationMetadata progressPercent */
                    progressPercent?: (number|null);

                    /** OperationMetadata batchRecognizeMetadata */
                    batchRecognizeMetadata?: (google.cloud.speech.v2.IBatchRecognizeMetadata|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata resource. */
                    public resource: string;

                    /** OperationMetadata method. */
                    public method: string;

                    /** OperationMetadata kmsKeyName. */
                    public kmsKeyName: string;

                    /** OperationMetadata kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /** OperationMetadata batchRecognizeRequest. */
                    public batchRecognizeRequest?: (google.cloud.speech.v2.IBatchRecognizeRequest|null);

                    /** OperationMetadata createRecognizerRequest. */
                    public createRecognizerRequest?: (google.cloud.speech.v2.ICreateRecognizerRequest|null);

                    /** OperationMetadata updateRecognizerRequest. */
                    public updateRecognizerRequest?: (google.cloud.speech.v2.IUpdateRecognizerRequest|null);

                    /** OperationMetadata deleteRecognizerRequest. */
                    public deleteRecognizerRequest?: (google.cloud.speech.v2.IDeleteRecognizerRequest|null);

                    /** OperationMetadata undeleteRecognizerRequest. */
                    public undeleteRecognizerRequest?: (google.cloud.speech.v2.IUndeleteRecognizerRequest|null);

                    /** OperationMetadata createCustomClassRequest. */
                    public createCustomClassRequest?: (google.cloud.speech.v2.ICreateCustomClassRequest|null);

                    /** OperationMetadata updateCustomClassRequest. */
                    public updateCustomClassRequest?: (google.cloud.speech.v2.IUpdateCustomClassRequest|null);

                    /** OperationMetadata deleteCustomClassRequest. */
                    public deleteCustomClassRequest?: (google.cloud.speech.v2.IDeleteCustomClassRequest|null);

                    /** OperationMetadata undeleteCustomClassRequest. */
                    public undeleteCustomClassRequest?: (google.cloud.speech.v2.IUndeleteCustomClassRequest|null);

                    /** OperationMetadata createPhraseSetRequest. */
                    public createPhraseSetRequest?: (google.cloud.speech.v2.ICreatePhraseSetRequest|null);

                    /** OperationMetadata updatePhraseSetRequest. */
                    public updatePhraseSetRequest?: (google.cloud.speech.v2.IUpdatePhraseSetRequest|null);

                    /** OperationMetadata deletePhraseSetRequest. */
                    public deletePhraseSetRequest?: (google.cloud.speech.v2.IDeletePhraseSetRequest|null);

                    /** OperationMetadata undeletePhraseSetRequest. */
                    public undeletePhraseSetRequest?: (google.cloud.speech.v2.IUndeletePhraseSetRequest|null);

                    /** OperationMetadata updateConfigRequest. */
                    public updateConfigRequest?: (google.cloud.speech.v2.IUpdateConfigRequest|null);

                    /** OperationMetadata progressPercent. */
                    public progressPercent: number;

                    /** OperationMetadata batchRecognizeMetadata. */
                    public batchRecognizeMetadata?: (google.cloud.speech.v2.IBatchRecognizeMetadata|null);

                    /** OperationMetadata request. */
                    public request?: ("batchRecognizeRequest"|"createRecognizerRequest"|"updateRecognizerRequest"|"deleteRecognizerRequest"|"undeleteRecognizerRequest"|"createCustomClassRequest"|"updateCustomClassRequest"|"deleteCustomClassRequest"|"undeleteCustomClassRequest"|"createPhraseSetRequest"|"updatePhraseSetRequest"|"deletePhraseSetRequest"|"undeletePhraseSetRequest"|"updateConfigRequest");

                    /** OperationMetadata metadata. */
                    public metadata?: "batchRecognizeMetadata";

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IOperationMetadata): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.speech.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecognizersRequest. */
                interface IListRecognizersRequest {

                    /** ListRecognizersRequest parent */
                    parent?: (string|null);

                    /** ListRecognizersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecognizersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRecognizersRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListRecognizersRequest. */
                class ListRecognizersRequest implements IListRecognizersRequest {

                    /**
                     * Constructs a new ListRecognizersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListRecognizersRequest);

                    /** ListRecognizersRequest parent. */
                    public parent: string;

                    /** ListRecognizersRequest pageSize. */
                    public pageSize: number;

                    /** ListRecognizersRequest pageToken. */
                    public pageToken: string;

                    /** ListRecognizersRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListRecognizersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecognizersRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListRecognizersRequest): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Encodes the specified ListRecognizersRequest message. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersRequest.verify|verify} messages.
                     * @param message ListRecognizersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListRecognizersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecognizersRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersRequest.verify|verify} messages.
                     * @param message ListRecognizersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListRecognizersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecognizersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecognizersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Decodes a ListRecognizersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecognizersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Verifies a ListRecognizersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecognizersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecognizersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Creates a plain object from a ListRecognizersRequest message. Also converts values to other types if specified.
                     * @param message ListRecognizersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListRecognizersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecognizersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecognizersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecognizersResponse. */
                interface IListRecognizersResponse {

                    /** ListRecognizersResponse recognizers */
                    recognizers?: (google.cloud.speech.v2.IRecognizer[]|null);

                    /** ListRecognizersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecognizersResponse. */
                class ListRecognizersResponse implements IListRecognizersResponse {

                    /**
                     * Constructs a new ListRecognizersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListRecognizersResponse);

                    /** ListRecognizersResponse recognizers. */
                    public recognizers: google.cloud.speech.v2.IRecognizer[];

                    /** ListRecognizersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecognizersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecognizersResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListRecognizersResponse): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Encodes the specified ListRecognizersResponse message. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersResponse.verify|verify} messages.
                     * @param message ListRecognizersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListRecognizersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecognizersResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersResponse.verify|verify} messages.
                     * @param message ListRecognizersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListRecognizersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecognizersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecognizersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Decodes a ListRecognizersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecognizersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Verifies a ListRecognizersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecognizersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecognizersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Creates a plain object from a ListRecognizersResponse message. Also converts values to other types if specified.
                     * @param message ListRecognizersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListRecognizersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecognizersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecognizersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecognizerRequest. */
                interface IGetRecognizerRequest {

                    /** GetRecognizerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecognizerRequest. */
                class GetRecognizerRequest implements IGetRecognizerRequest {

                    /**
                     * Constructs a new GetRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetRecognizerRequest);

                    /** GetRecognizerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetRecognizerRequest): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Encodes the specified GetRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.GetRecognizerRequest.verify|verify} messages.
                     * @param message GetRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetRecognizerRequest.verify|verify} messages.
                     * @param message GetRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Decodes a GetRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Verifies a GetRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Creates a plain object from a GetRecognizerRequest message. Also converts values to other types if specified.
                     * @param message GetRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRecognizerRequest. */
                interface IUpdateRecognizerRequest {

                    /** UpdateRecognizerRequest recognizer */
                    recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** UpdateRecognizerRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateRecognizerRequest. */
                class UpdateRecognizerRequest implements IUpdateRecognizerRequest {

                    /**
                     * Constructs a new UpdateRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdateRecognizerRequest);

                    /** UpdateRecognizerRequest recognizer. */
                    public recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** UpdateRecognizerRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdateRecognizerRequest): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Encodes the specified UpdateRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdateRecognizerRequest.verify|verify} messages.
                     * @param message UpdateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdateRecognizerRequest.verify|verify} messages.
                     * @param message UpdateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Decodes an UpdateRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Verifies an UpdateRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Creates a plain object from an UpdateRecognizerRequest message. Also converts values to other types if specified.
                     * @param message UpdateRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdateRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRecognizerRequest. */
                interface IDeleteRecognizerRequest {

                    /** DeleteRecognizerRequest name */
                    name?: (string|null);

                    /** DeleteRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteRecognizerRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteRecognizerRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteRecognizerRequest. */
                class DeleteRecognizerRequest implements IDeleteRecognizerRequest {

                    /**
                     * Constructs a new DeleteRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IDeleteRecognizerRequest);

                    /** DeleteRecognizerRequest name. */
                    public name: string;

                    /** DeleteRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteRecognizerRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteRecognizerRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IDeleteRecognizerRequest): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Encodes the specified DeleteRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.DeleteRecognizerRequest.verify|verify} messages.
                     * @param message DeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IDeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.DeleteRecognizerRequest.verify|verify} messages.
                     * @param message DeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IDeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Decodes a DeleteRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Verifies a DeleteRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Creates a plain object from a DeleteRecognizerRequest message. Also converts values to other types if specified.
                     * @param message DeleteRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.DeleteRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeleteRecognizerRequest. */
                interface IUndeleteRecognizerRequest {

                    /** UndeleteRecognizerRequest name */
                    name?: (string|null);

                    /** UndeleteRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UndeleteRecognizerRequest etag */
                    etag?: (string|null);
                }

                /** Represents an UndeleteRecognizerRequest. */
                class UndeleteRecognizerRequest implements IUndeleteRecognizerRequest {

                    /**
                     * Constructs a new UndeleteRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUndeleteRecognizerRequest);

                    /** UndeleteRecognizerRequest name. */
                    public name: string;

                    /** UndeleteRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UndeleteRecognizerRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new UndeleteRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeleteRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUndeleteRecognizerRequest): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Encodes the specified UndeleteRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.UndeleteRecognizerRequest.verify|verify} messages.
                     * @param message UndeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUndeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeleteRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UndeleteRecognizerRequest.verify|verify} messages.
                     * @param message UndeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUndeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeleteRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Decodes an UndeleteRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Verifies an UndeleteRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeleteRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeleteRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Creates a plain object from an UndeleteRecognizerRequest message. Also converts values to other types if specified.
                     * @param message UndeleteRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UndeleteRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeleteRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeleteRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Recognizer. */
                interface IRecognizer {

                    /** Recognizer name */
                    name?: (string|null);

                    /** Recognizer uid */
                    uid?: (string|null);

                    /** Recognizer displayName */
                    displayName?: (string|null);

                    /** Recognizer model */
                    model?: (string|null);

                    /** Recognizer languageCodes */
                    languageCodes?: (string[]|null);

                    /** Recognizer defaultRecognitionConfig */
                    defaultRecognitionConfig?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** Recognizer annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Recognizer state */
                    state?: (google.cloud.speech.v2.Recognizer.State|keyof typeof google.cloud.speech.v2.Recognizer.State|null);

                    /** Recognizer createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer etag */
                    etag?: (string|null);

                    /** Recognizer reconciling */
                    reconciling?: (boolean|null);

                    /** Recognizer kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** Recognizer kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);
                }

                /** Represents a Recognizer. */
                class Recognizer implements IRecognizer {

                    /**
                     * Constructs a new Recognizer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognizer);

                    /** Recognizer name. */
                    public name: string;

                    /** Recognizer uid. */
                    public uid: string;

                    /** Recognizer displayName. */
                    public displayName: string;

                    /** Recognizer model. */
                    public model: string;

                    /** Recognizer languageCodes. */
                    public languageCodes: string[];

                    /** Recognizer defaultRecognitionConfig. */
                    public defaultRecognitionConfig?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** Recognizer annotations. */
                    public annotations: { [k: string]: string };

                    /** Recognizer state. */
                    public state: (google.cloud.speech.v2.Recognizer.State|keyof typeof google.cloud.speech.v2.Recognizer.State);

                    /** Recognizer createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer etag. */
                    public etag: string;

                    /** Recognizer reconciling. */
                    public reconciling: boolean;

                    /** Recognizer kmsKeyName. */
                    public kmsKeyName: string;

                    /** Recognizer kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /**
                     * Creates a new Recognizer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Recognizer instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognizer): google.cloud.speech.v2.Recognizer;

                    /**
                     * Encodes the specified Recognizer message. Does not implicitly {@link google.cloud.speech.v2.Recognizer.verify|verify} messages.
                     * @param message Recognizer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognizer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Recognizer message, length delimited. Does not implicitly {@link google.cloud.speech.v2.Recognizer.verify|verify} messages.
                     * @param message Recognizer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognizer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recognizer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recognizer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.Recognizer;

                    /**
                     * Decodes a Recognizer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Recognizer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.Recognizer;

                    /**
                     * Verifies a Recognizer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Recognizer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Recognizer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.Recognizer;

                    /**
                     * Creates a plain object from a Recognizer message. Also converts values to other types if specified.
                     * @param message Recognizer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.Recognizer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Recognizer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Recognizer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Recognizer {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 2,
                        DELETED = 4
                    }
                }

                /** Properties of an AutoDetectDecodingConfig. */
                interface IAutoDetectDecodingConfig {
                }

                /** Represents an AutoDetectDecodingConfig. */
                class AutoDetectDecodingConfig implements IAutoDetectDecodingConfig {

                    /**
                     * Constructs a new AutoDetectDecodingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IAutoDetectDecodingConfig);

                    /**
                     * Creates a new AutoDetectDecodingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoDetectDecodingConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IAutoDetectDecodingConfig): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Encodes the specified AutoDetectDecodingConfig message. Does not implicitly {@link google.cloud.speech.v2.AutoDetectDecodingConfig.verify|verify} messages.
                     * @param message AutoDetectDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IAutoDetectDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoDetectDecodingConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.AutoDetectDecodingConfig.verify|verify} messages.
                     * @param message AutoDetectDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IAutoDetectDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoDetectDecodingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoDetectDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Decodes an AutoDetectDecodingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoDetectDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Verifies an AutoDetectDecodingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoDetectDecodingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoDetectDecodingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Creates a plain object from an AutoDetectDecodingConfig message. Also converts values to other types if specified.
                     * @param message AutoDetectDecodingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.AutoDetectDecodingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoDetectDecodingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutoDetectDecodingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExplicitDecodingConfig. */
                interface IExplicitDecodingConfig {

                    /** ExplicitDecodingConfig encoding */
                    encoding?: (google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding|keyof typeof google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding|null);

                    /** ExplicitDecodingConfig sampleRateHertz */
                    sampleRateHertz?: (number|null);

                    /** ExplicitDecodingConfig audioChannelCount */
                    audioChannelCount?: (number|null);
                }

                /** Represents an ExplicitDecodingConfig. */
                class ExplicitDecodingConfig implements IExplicitDecodingConfig {

                    /**
                     * Constructs a new ExplicitDecodingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IExplicitDecodingConfig);

                    /** ExplicitDecodingConfig encoding. */
                    public encoding: (google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding|keyof typeof google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding);

                    /** ExplicitDecodingConfig sampleRateHertz. */
                    public sampleRateHertz: number;

                    /** ExplicitDecodingConfig audioChannelCount. */
                    public audioChannelCount: number;

                    /**
                     * Creates a new ExplicitDecodingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplicitDecodingConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IExplicitDecodingConfig): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Encodes the specified ExplicitDecodingConfig message. Does not implicitly {@link google.cloud.speech.v2.ExplicitDecodingConfig.verify|verify} messages.
                     * @param message ExplicitDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IExplicitDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplicitDecodingConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ExplicitDecodingConfig.verify|verify} messages.
                     * @param message ExplicitDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IExplicitDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplicitDecodingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplicitDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Decodes an ExplicitDecodingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplicitDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Verifies an ExplicitDecodingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplicitDecodingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplicitDecodingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Creates a plain object from an ExplicitDecodingConfig message. Also converts values to other types if specified.
                     * @param message ExplicitDecodingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ExplicitDecodingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplicitDecodingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplicitDecodingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExplicitDecodingConfig {

                    /** AudioEncoding enum. */
                    enum AudioEncoding {
                        AUDIO_ENCODING_UNSPECIFIED = 0,
                        LINEAR16 = 1,
                        MULAW = 2,
                        ALAW = 3,
                        AMR = 4,
                        AMR_WB = 5,
                        FLAC = 6,
                        MP3 = 7,
                        OGG_OPUS = 8,
                        WEBM_OPUS = 9,
                        MP4_AAC = 10,
                        M4A_AAC = 11,
                        MOV_AAC = 12
                    }
                }

                /** Properties of a SpeakerDiarizationConfig. */
                interface ISpeakerDiarizationConfig {

                    /** SpeakerDiarizationConfig minSpeakerCount */
                    minSpeakerCount?: (number|null);

                    /** SpeakerDiarizationConfig maxSpeakerCount */
                    maxSpeakerCount?: (number|null);
                }

                /** Represents a SpeakerDiarizationConfig. */
                class SpeakerDiarizationConfig implements ISpeakerDiarizationConfig {

                    /**
                     * Constructs a new SpeakerDiarizationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeakerDiarizationConfig);

                    /** SpeakerDiarizationConfig minSpeakerCount. */
                    public minSpeakerCount: number;

                    /** SpeakerDiarizationConfig maxSpeakerCount. */
                    public maxSpeakerCount: number;

                    /**
                     * Creates a new SpeakerDiarizationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeakerDiarizationConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeakerDiarizationConfig): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Encodes the specified SpeakerDiarizationConfig message. Does not implicitly {@link google.cloud.speech.v2.SpeakerDiarizationConfig.verify|verify} messages.
                     * @param message SpeakerDiarizationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeakerDiarizationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeakerDiarizationConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeakerDiarizationConfig.verify|verify} messages.
                     * @param message SpeakerDiarizationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeakerDiarizationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeakerDiarizationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeakerDiarizationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Decodes a SpeakerDiarizationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeakerDiarizationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Verifies a SpeakerDiarizationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeakerDiarizationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeakerDiarizationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Creates a plain object from a SpeakerDiarizationConfig message. Also converts values to other types if specified.
                     * @param message SpeakerDiarizationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeakerDiarizationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeakerDiarizationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeakerDiarizationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognitionFeatures. */
                interface IRecognitionFeatures {

                    /** RecognitionFeatures profanityFilter */
                    profanityFilter?: (boolean|null);

                    /** RecognitionFeatures enableWordTimeOffsets */
                    enableWordTimeOffsets?: (boolean|null);

                    /** RecognitionFeatures enableWordConfidence */
                    enableWordConfidence?: (boolean|null);

                    /** RecognitionFeatures enableAutomaticPunctuation */
                    enableAutomaticPunctuation?: (boolean|null);

                    /** RecognitionFeatures enableSpokenPunctuation */
                    enableSpokenPunctuation?: (boolean|null);

                    /** RecognitionFeatures enableSpokenEmojis */
                    enableSpokenEmojis?: (boolean|null);

                    /** RecognitionFeatures multiChannelMode */
                    multiChannelMode?: (google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode|keyof typeof google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode|null);

                    /** RecognitionFeatures diarizationConfig */
                    diarizationConfig?: (google.cloud.speech.v2.ISpeakerDiarizationConfig|null);

                    /** RecognitionFeatures maxAlternatives */
                    maxAlternatives?: (number|null);
                }

                /** Represents a RecognitionFeatures. */
                class RecognitionFeatures implements IRecognitionFeatures {

                    /**
                     * Constructs a new RecognitionFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionFeatures);

                    /** RecognitionFeatures profanityFilter. */
                    public profanityFilter: boolean;

                    /** RecognitionFeatures enableWordTimeOffsets. */
                    public enableWordTimeOffsets: boolean;

                    /** RecognitionFeatures enableWordConfidence. */
                    public enableWordConfidence: boolean;

                    /** RecognitionFeatures enableAutomaticPunctuation. */
                    public enableAutomaticPunctuation: boolean;

                    /** RecognitionFeatures enableSpokenPunctuation. */
                    public enableSpokenPunctuation: boolean;

                    /** RecognitionFeatures enableSpokenEmojis. */
                    public enableSpokenEmojis: boolean;

                    /** RecognitionFeatures multiChannelMode. */
                    public multiChannelMode: (google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode|keyof typeof google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode);

                    /** RecognitionFeatures diarizationConfig. */
                    public diarizationConfig?: (google.cloud.speech.v2.ISpeakerDiarizationConfig|null);

                    /** RecognitionFeatures maxAlternatives. */
                    public maxAlternatives: number;

                    /**
                     * Creates a new RecognitionFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionFeatures instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionFeatures): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Encodes the specified RecognitionFeatures message. Does not implicitly {@link google.cloud.speech.v2.RecognitionFeatures.verify|verify} messages.
                     * @param message RecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionFeatures message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionFeatures.verify|verify} messages.
                     * @param message RecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Decodes a RecognitionFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Verifies a RecognitionFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Creates a plain object from a RecognitionFeatures message. Also converts values to other types if specified.
                     * @param message RecognitionFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RecognitionFeatures {

                    /** MultiChannelMode enum. */
                    enum MultiChannelMode {
                        MULTI_CHANNEL_MODE_UNSPECIFIED = 0,
                        SEPARATE_RECOGNITION_PER_CHANNEL = 1
                    }
                }

                /** Properties of a TranscriptNormalization. */
                interface ITranscriptNormalization {

                    /** TranscriptNormalization entries */
                    entries?: (google.cloud.speech.v2.TranscriptNormalization.IEntry[]|null);
                }

                /** Represents a TranscriptNormalization. */
                class TranscriptNormalization implements ITranscriptNormalization {

                    /**
                     * Constructs a new TranscriptNormalization.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ITranscriptNormalization);

                    /** TranscriptNormalization entries. */
                    public entries: google.cloud.speech.v2.TranscriptNormalization.IEntry[];

                    /**
                     * Creates a new TranscriptNormalization instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranscriptNormalization instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ITranscriptNormalization): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Encodes the specified TranscriptNormalization message. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.verify|verify} messages.
                     * @param message TranscriptNormalization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ITranscriptNormalization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranscriptNormalization message, length delimited. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.verify|verify} messages.
                     * @param message TranscriptNormalization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ITranscriptNormalization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranscriptNormalization message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranscriptNormalization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Decodes a TranscriptNormalization message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranscriptNormalization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Verifies a TranscriptNormalization message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranscriptNormalization message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranscriptNormalization
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Creates a plain object from a TranscriptNormalization message. Also converts values to other types if specified.
                     * @param message TranscriptNormalization
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.TranscriptNormalization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranscriptNormalization to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranscriptNormalization
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TranscriptNormalization {

                    /** Properties of an Entry. */
                    interface IEntry {

                        /** Entry search */
                        search?: (string|null);

                        /** Entry replace */
                        replace?: (string|null);

                        /** Entry caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents an Entry. */
                    class Entry implements IEntry {

                        /**
                         * Constructs a new Entry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.TranscriptNormalization.IEntry);

                        /** Entry search. */
                        public search: string;

                        /** Entry replace. */
                        public replace: string;

                        /** Entry caseSensitive. */
                        public caseSensitive: boolean;

                        /**
                         * Creates a new Entry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Entry instance
                         */
                        public static create(properties?: google.cloud.speech.v2.TranscriptNormalization.IEntry): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Encodes the specified Entry message. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.Entry.verify|verify} messages.
                         * @param message Entry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.TranscriptNormalization.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Entry message, length delimited. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.Entry.verify|verify} messages.
                         * @param message Entry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.TranscriptNormalization.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Entry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Decodes an Entry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Verifies an Entry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Entry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Creates a plain object from an Entry message. Also converts values to other types if specified.
                         * @param message Entry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.TranscriptNormalization.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Entry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Entry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TranslationConfig. */
                interface ITranslationConfig {

                    /** TranslationConfig targetLanguage */
                    targetLanguage?: (string|null);
                }

                /** Represents a TranslationConfig. */
                class TranslationConfig implements ITranslationConfig {

                    /**
                     * Constructs a new TranslationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ITranslationConfig);

                    /** TranslationConfig targetLanguage. */
                    public targetLanguage: string;

                    /**
                     * Creates a new TranslationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslationConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ITranslationConfig): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Encodes the specified TranslationConfig message. Does not implicitly {@link google.cloud.speech.v2.TranslationConfig.verify|verify} messages.
                     * @param message TranslationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ITranslationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslationConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.TranslationConfig.verify|verify} messages.
                     * @param message TranslationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ITranslationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Decodes a TranslationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Verifies a TranslationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Creates a plain object from a TranslationConfig message. Also converts values to other types if specified.
                     * @param message TranslationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.TranslationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranslationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechAdaptation. */
                interface ISpeechAdaptation {

                    /** SpeechAdaptation phraseSets */
                    phraseSets?: (google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet[]|null);

                    /** SpeechAdaptation customClasses */
                    customClasses?: (google.cloud.speech.v2.ICustomClass[]|null);
                }

                /** Represents a SpeechAdaptation. */
                class SpeechAdaptation implements ISpeechAdaptation {

                    /**
                     * Constructs a new SpeechAdaptation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeechAdaptation);

                    /** SpeechAdaptation phraseSets. */
                    public phraseSets: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet[];

                    /** SpeechAdaptation customClasses. */
                    public customClasses: google.cloud.speech.v2.ICustomClass[];

                    /**
                     * Creates a new SpeechAdaptation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechAdaptation instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeechAdaptation): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Encodes the specified SpeechAdaptation message. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.verify|verify} messages.
                     * @param message SpeechAdaptation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeechAdaptation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechAdaptation message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.verify|verify} messages.
                     * @param message SpeechAdaptation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeechAdaptation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechAdaptation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechAdaptation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Decodes a SpeechAdaptation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechAdaptation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Verifies a SpeechAdaptation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechAdaptation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechAdaptation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Creates a plain object from a SpeechAdaptation message. Also converts values to other types if specified.
                     * @param message SpeechAdaptation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeechAdaptation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechAdaptation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechAdaptation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SpeechAdaptation {

                    /** Properties of an AdaptationPhraseSet. */
                    interface IAdaptationPhraseSet {

                        /** AdaptationPhraseSet phraseSet */
                        phraseSet?: (string|null);

                        /** AdaptationPhraseSet inlinePhraseSet */
                        inlinePhraseSet?: (google.cloud.speech.v2.IPhraseSet|null);
                    }

                    /** Represents an AdaptationPhraseSet. */
                    class AdaptationPhraseSet implements IAdaptationPhraseSet {

                        /**
                         * Constructs a new AdaptationPhraseSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet);

                        /** AdaptationPhraseSet phraseSet. */
                        public phraseSet?: (string|null);

                        /** AdaptationPhraseSet inlinePhraseSet. */
                        public inlinePhraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                        /** AdaptationPhraseSet value. */
                        public value?: ("phraseSet"|"inlinePhraseSet");

                        /**
                         * Creates a new AdaptationPhraseSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdaptationPhraseSet instance
                         */
                        public static create(properties?: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Encodes the specified AdaptationPhraseSet message. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.verify|verify} messages.
                         * @param message AdaptationPhraseSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdaptationPhraseSet message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.verify|verify} messages.
                         * @param message AdaptationPhraseSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdaptationPhraseSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdaptationPhraseSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Decodes an AdaptationPhraseSet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdaptationPhraseSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Verifies an AdaptationPhraseSet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdaptationPhraseSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdaptationPhraseSet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Creates a plain object from an AdaptationPhraseSet message. Also converts values to other types if specified.
                         * @param message AdaptationPhraseSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdaptationPhraseSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AdaptationPhraseSet
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RecognitionConfig. */
                interface IRecognitionConfig {

                    /** RecognitionConfig autoDecodingConfig */
                    autoDecodingConfig?: (google.cloud.speech.v2.IAutoDetectDecodingConfig|null);

                    /** RecognitionConfig explicitDecodingConfig */
                    explicitDecodingConfig?: (google.cloud.speech.v2.IExplicitDecodingConfig|null);

                    /** RecognitionConfig model */
                    model?: (string|null);

                    /** RecognitionConfig languageCodes */
                    languageCodes?: (string[]|null);

                    /** RecognitionConfig features */
                    features?: (google.cloud.speech.v2.IRecognitionFeatures|null);

                    /** RecognitionConfig adaptation */
                    adaptation?: (google.cloud.speech.v2.ISpeechAdaptation|null);

                    /** RecognitionConfig transcriptNormalization */
                    transcriptNormalization?: (google.cloud.speech.v2.ITranscriptNormalization|null);

                    /** RecognitionConfig translationConfig */
                    translationConfig?: (google.cloud.speech.v2.ITranslationConfig|null);
                }

                /** Represents a RecognitionConfig. */
                class RecognitionConfig implements IRecognitionConfig {

                    /**
                     * Constructs a new RecognitionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionConfig);

                    /** RecognitionConfig autoDecodingConfig. */
                    public autoDecodingConfig?: (google.cloud.speech.v2.IAutoDetectDecodingConfig|null);

                    /** RecognitionConfig explicitDecodingConfig. */
                    public explicitDecodingConfig?: (google.cloud.speech.v2.IExplicitDecodingConfig|null);

                    /** RecognitionConfig model. */
                    public model: string;

                    /** RecognitionConfig languageCodes. */
                    public languageCodes: string[];

                    /** RecognitionConfig features. */
                    public features?: (google.cloud.speech.v2.IRecognitionFeatures|null);

                    /** RecognitionConfig adaptation. */
                    public adaptation?: (google.cloud.speech.v2.ISpeechAdaptation|null);

                    /** RecognitionConfig transcriptNormalization. */
                    public transcriptNormalization?: (google.cloud.speech.v2.ITranscriptNormalization|null);

                    /** RecognitionConfig translationConfig. */
                    public translationConfig?: (google.cloud.speech.v2.ITranslationConfig|null);

                    /** RecognitionConfig decodingConfig. */
                    public decodingConfig?: ("autoDecodingConfig"|"explicitDecodingConfig");

                    /**
                     * Creates a new RecognitionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionConfig): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Encodes the specified RecognitionConfig message. Does not implicitly {@link google.cloud.speech.v2.RecognitionConfig.verify|verify} messages.
                     * @param message RecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionConfig.verify|verify} messages.
                     * @param message RecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Decodes a RecognitionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Verifies a RecognitionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Creates a plain object from a RecognitionConfig message. Also converts values to other types if specified.
                     * @param message RecognitionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognizeRequest. */
                interface IRecognizeRequest {

                    /** RecognizeRequest recognizer */
                    recognizer?: (string|null);

                    /** RecognizeRequest config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** RecognizeRequest configMask */
                    configMask?: (google.protobuf.IFieldMask|null);

                    /** RecognizeRequest content */
                    content?: (Uint8Array|Buffer|string|null);

                    /** RecognizeRequest uri */
                    uri?: (string|null);
                }

                /** Represents a RecognizeRequest. */
                class RecognizeRequest implements IRecognizeRequest {

                    /**
                     * Constructs a new RecognizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognizeRequest);

                    /** RecognizeRequest recognizer. */
                    public recognizer: string;

                    /** RecognizeRequest config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** RecognizeRequest configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** RecognizeRequest content. */
                    public content?: (Uint8Array|Buffer|string|null);

                    /** RecognizeRequest uri. */
                    public uri?: (string|null);

                    /** RecognizeRequest audioSource. */
                    public audioSource?: ("content"|"uri");

                    /**
                     * Creates a new RecognizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognizeRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognizeRequest): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Encodes the specified RecognizeRequest message. Does not implicitly {@link google.cloud.speech.v2.RecognizeRequest.verify|verify} messages.
                     * @param message RecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognizeRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognizeRequest.verify|verify} messages.
                     * @param message RecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Decodes a RecognizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Verifies a RecognizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Creates a plain object from a RecognizeRequest message. Also converts values to other types if specified.
                     * @param message RecognizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognizeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognitionResponseMetadata. */
                interface IRecognitionResponseMetadata {

                    /** RecognitionResponseMetadata requestId */
                    requestId?: (string|null);

                    /** RecognitionResponseMetadata totalBilledDuration */
                    totalBilledDuration?: (google.protobuf.IDuration|null);
                }

                /** Represents a RecognitionResponseMetadata. */
                class RecognitionResponseMetadata implements IRecognitionResponseMetadata {

                    /**
                     * Constructs a new RecognitionResponseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionResponseMetadata);

                    /** RecognitionResponseMetadata requestId. */
                    public requestId: string;

                    /** RecognitionResponseMetadata totalBilledDuration. */
                    public totalBilledDuration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new RecognitionResponseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionResponseMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionResponseMetadata): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Encodes the specified RecognitionResponseMetadata message. Does not implicitly {@link google.cloud.speech.v2.RecognitionResponseMetadata.verify|verify} messages.
                     * @param message RecognitionResponseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionResponseMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionResponseMetadata.verify|verify} messages.
                     * @param message RecognitionResponseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionResponseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionResponseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Decodes a RecognitionResponseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionResponseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Verifies a RecognitionResponseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionResponseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionResponseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Creates a plain object from a RecognitionResponseMetadata message. Also converts values to other types if specified.
                     * @param message RecognitionResponseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionResponseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionResponseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionResponseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechRecognitionAlternative. */
                interface ISpeechRecognitionAlternative {

                    /** SpeechRecognitionAlternative transcript */
                    transcript?: (string|null);

                    /** SpeechRecognitionAlternative confidence */
                    confidence?: (number|null);

                    /** SpeechRecognitionAlternative words */
                    words?: (google.cloud.speech.v2.IWordInfo[]|null);
                }

                /** Represents a SpeechRecognitionAlternative. */
                class SpeechRecognitionAlternative implements ISpeechRecognitionAlternative {

                    /**
                     * Constructs a new SpeechRecognitionAlternative.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeechRecognitionAlternative);

                    /** SpeechRecognitionAlternative transcript. */
                    public transcript: string;

                    /** SpeechRecognitionAlternative confidence. */
                    public confidence: number;

                    /** SpeechRecognitionAlternative words. */
                    public words: google.cloud.speech.v2.IWordInfo[];

                    /**
                     * Creates a new SpeechRecognitionAlternative instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechRecognitionAlternative instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeechRecognitionAlternative): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Encodes the specified SpeechRecognitionAlternative message. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionAlternative.verify|verify} messages.
                     * @param message SpeechRecognitionAlternative message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeechRecognitionAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechRecognitionAlternative message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionAlternative.verify|verify} messages.
                     * @param message SpeechRecognitionAlternative message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeechRecognitionAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechRecognitionAlternative message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechRecognitionAlternative
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Decodes a SpeechRecognitionAlternative message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechRecognitionAlternative
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Verifies a SpeechRecognitionAlternative message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechRecognitionAlternative message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechRecognitionAlternative
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Creates a plain object from a SpeechRecognitionAlternative message. Also converts values to other types if specified.
                     * @param message SpeechRecognitionAlternative
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeechRecognitionAlternative, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechRecognitionAlternative to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechRecognitionAlternative
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WordInfo. */
                interface IWordInfo {

                    /** WordInfo startOffset */
                    startOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo endOffset */
                    endOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo word */
                    word?: (string|null);

                    /** WordInfo confidence */
                    confidence?: (number|null);

                    /** WordInfo speakerLabel */
                    speakerLabel?: (string|null);
                }

                /** Represents a WordInfo. */
                class WordInfo implements IWordInfo {

                    /**
                     * Constructs a new WordInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IWordInfo);

                    /** WordInfo startOffset. */
                    public startOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo endOffset. */
                    public endOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo word. */
                    public word: string;

                    /** WordInfo confidence. */
                    public confidence: number;

                    /** WordInfo speakerLabel. */
                    public speakerLabel: string;

                    /**
                     * Creates a new WordInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WordInfo instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IWordInfo): google.cloud.speech.v2.WordInfo;

                    /**
                     * Encodes the specified WordInfo message. Does not implicitly {@link google.cloud.speech.v2.WordInfo.verify|verify} messages.
                     * @param message WordInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WordInfo message, length delimited. Does not implicitly {@link google.cloud.speech.v2.WordInfo.verify|verify} messages.
                     * @param message WordInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WordInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WordInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.WordInfo;

                    /**
                     * Decodes a WordInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WordInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.WordInfo;

                    /**
                     * Verifies a WordInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WordInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WordInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.WordInfo;

                    /**
                     * Creates a plain object from a WordInfo message. Also converts values to other types if specified.
                     * @param message WordInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.WordInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WordInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WordInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechRecognitionResult. */
                interface ISpeechRecognitionResult {

                    /** SpeechRecognitionResult alternatives */
                    alternatives?: (google.cloud.speech.v2.ISpeechRecognitionAlternative[]|null);

                    /** SpeechRecognitionResult channelTag */
                    channelTag?: (number|null);

                    /** SpeechRecognitionResult resultEndOffset */
                    resultEndOffset?: (google.protobuf.IDuration|null);

                    /** SpeechRecognitionResult languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a SpeechRecognitionResult. */
                class SpeechRecognitionResult implements ISpeechRecognitionResult {

                    /**
                     * Constructs a new SpeechRecognitionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeechRecognitionResult);

                    /** SpeechRecognitionResult alternatives. */
                    public alternatives: google.cloud.speech.v2.ISpeechRecognitionAlternative[];

                    /** SpeechRecognitionResult channelTag. */
                    public channelTag: number;

                    /** SpeechRecognitionResult resultEndOffset. */
                    public resultEndOffset?: (google.protobuf.IDuration|null);

                    /** SpeechRecognitionResult languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new SpeechRecognitionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechRecognitionResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeechRecognitionResult): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Encodes the specified SpeechRecognitionResult message. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionResult.verify|verify} messages.
                     * @param message SpeechRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeechRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechRecognitionResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionResult.verify|verify} messages.
                     * @param message SpeechRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeechRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechRecognitionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Decodes a SpeechRecognitionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Verifies a SpeechRecognitionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechRecognitionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechRecognitionResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Creates a plain object from a SpeechRecognitionResult message. Also converts values to other types if specified.
                     * @param message SpeechRecognitionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeechRecognitionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechRecognitionResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechRecognitionResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognizeResponse. */
                interface IRecognizeResponse {

                    /** RecognizeResponse results */
                    results?: (google.cloud.speech.v2.ISpeechRecognitionResult[]|null);

                    /** RecognizeResponse metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);
                }

                /** Represents a RecognizeResponse. */
                class RecognizeResponse implements IRecognizeResponse {

                    /**
                     * Constructs a new RecognizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognizeResponse);

                    /** RecognizeResponse results. */
                    public results: google.cloud.speech.v2.ISpeechRecognitionResult[];

                    /** RecognizeResponse metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /**
                     * Creates a new RecognizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognizeResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognizeResponse): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Encodes the specified RecognizeResponse message. Does not implicitly {@link google.cloud.speech.v2.RecognizeResponse.verify|verify} messages.
                     * @param message RecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognizeResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognizeResponse.verify|verify} messages.
                     * @param message RecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Decodes a RecognizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Verifies a RecognizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Creates a plain object from a RecognizeResponse message. Also converts values to other types if specified.
                     * @param message RecognizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognizeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognitionFeatures. */
                interface IStreamingRecognitionFeatures {

                    /** StreamingRecognitionFeatures enableVoiceActivityEvents */
                    enableVoiceActivityEvents?: (boolean|null);

                    /** StreamingRecognitionFeatures interimResults */
                    interimResults?: (boolean|null);

                    /** StreamingRecognitionFeatures voiceActivityTimeout */
                    voiceActivityTimeout?: (google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout|null);
                }

                /** Represents a StreamingRecognitionFeatures. */
                class StreamingRecognitionFeatures implements IStreamingRecognitionFeatures {

                    /**
                     * Constructs a new StreamingRecognitionFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognitionFeatures);

                    /** StreamingRecognitionFeatures enableVoiceActivityEvents. */
                    public enableVoiceActivityEvents: boolean;

                    /** StreamingRecognitionFeatures interimResults. */
                    public interimResults: boolean;

                    /** StreamingRecognitionFeatures voiceActivityTimeout. */
                    public voiceActivityTimeout?: (google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout|null);

                    /**
                     * Creates a new StreamingRecognitionFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognitionFeatures instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognitionFeatures): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Encodes the specified StreamingRecognitionFeatures message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.verify|verify} messages.
                     * @param message StreamingRecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognitionFeatures message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.verify|verify} messages.
                     * @param message StreamingRecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognitionFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Decodes a StreamingRecognitionFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Verifies a StreamingRecognitionFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognitionFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognitionFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Creates a plain object from a StreamingRecognitionFeatures message. Also converts values to other types if specified.
                     * @param message StreamingRecognitionFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognitionFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognitionFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognitionFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StreamingRecognitionFeatures {

                    /** Properties of a VoiceActivityTimeout. */
                    interface IVoiceActivityTimeout {

                        /** VoiceActivityTimeout speechStartTimeout */
                        speechStartTimeout?: (google.protobuf.IDuration|null);

                        /** VoiceActivityTimeout speechEndTimeout */
                        speechEndTimeout?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a VoiceActivityTimeout. */
                    class VoiceActivityTimeout implements IVoiceActivityTimeout {

                        /**
                         * Constructs a new VoiceActivityTimeout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout);

                        /** VoiceActivityTimeout speechStartTimeout. */
                        public speechStartTimeout?: (google.protobuf.IDuration|null);

                        /** VoiceActivityTimeout speechEndTimeout. */
                        public speechEndTimeout?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new VoiceActivityTimeout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VoiceActivityTimeout instance
                         */
                        public static create(properties?: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Encodes the specified VoiceActivityTimeout message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout.verify|verify} messages.
                         * @param message VoiceActivityTimeout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VoiceActivityTimeout message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout.verify|verify} messages.
                         * @param message VoiceActivityTimeout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VoiceActivityTimeout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VoiceActivityTimeout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Decodes a VoiceActivityTimeout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VoiceActivityTimeout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Verifies a VoiceActivityTimeout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VoiceActivityTimeout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VoiceActivityTimeout
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Creates a plain object from a VoiceActivityTimeout message. Also converts values to other types if specified.
                         * @param message VoiceActivityTimeout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VoiceActivityTimeout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VoiceActivityTimeout
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a StreamingRecognitionConfig. */
                interface IStreamingRecognitionConfig {

                    /** StreamingRecognitionConfig config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** StreamingRecognitionConfig configMask */
                    configMask?: (google.protobuf.IFieldMask|null);

                    /** StreamingRecognitionConfig streamingFeatures */
                    streamingFeatures?: (google.cloud.speech.v2.IStreamingRecognitionFeatures|null);
                }

                /** Represents a StreamingRecognitionConfig. */
                class StreamingRecognitionConfig implements IStreamingRecognitionConfig {

                    /**
                     * Constructs a new StreamingRecognitionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognitionConfig);

                    /** StreamingRecognitionConfig config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** StreamingRecognitionConfig configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** StreamingRecognitionConfig streamingFeatures. */
                    public streamingFeatures?: (google.cloud.speech.v2.IStreamingRecognitionFeatures|null);

                    /**
                     * Creates a new StreamingRecognitionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognitionConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognitionConfig): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Encodes the specified StreamingRecognitionConfig message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionConfig.verify|verify} messages.
                     * @param message StreamingRecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognitionConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionConfig.verify|verify} messages.
                     * @param message StreamingRecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognitionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Decodes a StreamingRecognitionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Verifies a StreamingRecognitionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognitionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognitionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Creates a plain object from a StreamingRecognitionConfig message. Also converts values to other types if specified.
                     * @param message StreamingRecognitionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognitionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognitionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognitionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognizeRequest. */
                interface IStreamingRecognizeRequest {

                    /** StreamingRecognizeRequest recognizer */
                    recognizer?: (string|null);

                    /** StreamingRecognizeRequest streamingConfig */
                    streamingConfig?: (google.cloud.speech.v2.IStreamingRecognitionConfig|null);

                    /** StreamingRecognizeRequest audio */
                    audio?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a StreamingRecognizeRequest. */
                class StreamingRecognizeRequest implements IStreamingRecognizeRequest {

                    /**
                     * Constructs a new StreamingRecognizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognizeRequest);

                    /** StreamingRecognizeRequest recognizer. */
                    public recognizer: string;

                    /** StreamingRecognizeRequest streamingConfig. */
                    public streamingConfig?: (google.cloud.speech.v2.IStreamingRecognitionConfig|null);

                    /** StreamingRecognizeRequest audio. */
                    public audio?: (Uint8Array|Buffer|string|null);

                    /** StreamingRecognizeRequest streamingRequest. */
                    public streamingRequest?: ("streamingConfig"|"audio");

                    /**
                     * Creates a new StreamingRecognizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognizeRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognizeRequest): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Encodes the specified StreamingRecognizeRequest message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeRequest.verify|verify} messages.
                     * @param message StreamingRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognizeRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeRequest.verify|verify} messages.
                     * @param message StreamingRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Decodes a StreamingRecognizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Verifies a StreamingRecognizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Creates a plain object from a StreamingRecognizeRequest message. Also converts values to other types if specified.
                     * @param message StreamingRecognizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognizeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeRequest. */
                interface IBatchRecognizeRequest {

                    /** BatchRecognizeRequest recognizer */
                    recognizer?: (string|null);

                    /** BatchRecognizeRequest config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeRequest configMask */
                    configMask?: (google.protobuf.IFieldMask|null);

                    /** BatchRecognizeRequest files */
                    files?: (google.cloud.speech.v2.IBatchRecognizeFileMetadata[]|null);

                    /** BatchRecognizeRequest recognitionOutputConfig */
                    recognitionOutputConfig?: (google.cloud.speech.v2.IRecognitionOutputConfig|null);

                    /** BatchRecognizeRequest processingStrategy */
                    processingStrategy?: (google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy|keyof typeof google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy|null);
                }

                /** Represents a BatchRecognizeRequest. */
                class BatchRecognizeRequest implements IBatchRecognizeRequest {

                    /**
                     * Constructs a new BatchRecognizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeRequest);

                    /** BatchRecognizeRequest recognizer. */
                    public recognizer: string;

                    /** BatchRecognizeRequest config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeRequest configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** BatchRecognizeRequest files. */
                    public files: google.cloud.speech.v2.IBatchRecognizeFileMetadata[];

                    /** BatchRecognizeRequest recognitionOutputConfig. */
                    public recognitionOutputConfig?: (google.cloud.speech.v2.IRecognitionOutputConfig|null);

                    /** BatchRecognizeRequest processingStrategy. */
                    public processingStrategy: (google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy|keyof typeof google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy);

                    /**
                     * Creates a new BatchRecognizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeRequest): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Encodes the specified BatchRecognizeRequest message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeRequest.verify|verify} messages.
                     * @param message BatchRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeRequest.verify|verify} messages.
                     * @param message BatchRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Decodes a BatchRecognizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Verifies a BatchRecognizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Creates a plain object from a BatchRecognizeRequest message. Also converts values to other types if specified.
                     * @param message BatchRecognizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BatchRecognizeRequest {

                    /** ProcessingStrategy enum. */
                    enum ProcessingStrategy {
                        PROCESSING_STRATEGY_UNSPECIFIED = 0,
                        DYNAMIC_BATCHING = 1
                    }
                }

                /** Properties of a GcsOutputConfig. */
                interface IGcsOutputConfig {

                    /** GcsOutputConfig uri */
                    uri?: (string|null);
                }

                /** Represents a GcsOutputConfig. */
                class GcsOutputConfig implements IGcsOutputConfig {

                    /**
                     * Constructs a new GcsOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGcsOutputConfig);

                    /** GcsOutputConfig uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsOutputConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGcsOutputConfig): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Encodes the specified GcsOutputConfig message. Does not implicitly {@link google.cloud.speech.v2.GcsOutputConfig.verify|verify} messages.
                     * @param message GcsOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGcsOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsOutputConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GcsOutputConfig.verify|verify} messages.
                     * @param message GcsOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGcsOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Decodes a GcsOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Verifies a GcsOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Creates a plain object from a GcsOutputConfig message. Also converts values to other types if specified.
                     * @param message GcsOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GcsOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InlineOutputConfig. */
                interface IInlineOutputConfig {
                }

                /** Represents an InlineOutputConfig. */
                class InlineOutputConfig implements IInlineOutputConfig {

                    /**
                     * Constructs a new InlineOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IInlineOutputConfig);

                    /**
                     * Creates a new InlineOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InlineOutputConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IInlineOutputConfig): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Encodes the specified InlineOutputConfig message. Does not implicitly {@link google.cloud.speech.v2.InlineOutputConfig.verify|verify} messages.
                     * @param message InlineOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IInlineOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InlineOutputConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.InlineOutputConfig.verify|verify} messages.
                     * @param message InlineOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IInlineOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InlineOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InlineOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Decodes an InlineOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InlineOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Verifies an InlineOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InlineOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InlineOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Creates a plain object from an InlineOutputConfig message. Also converts values to other types if specified.
                     * @param message InlineOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.InlineOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InlineOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InlineOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NativeOutputFileFormatConfig. */
                interface INativeOutputFileFormatConfig {
                }

                /** Represents a NativeOutputFileFormatConfig. */
                class NativeOutputFileFormatConfig implements INativeOutputFileFormatConfig {

                    /**
                     * Constructs a new NativeOutputFileFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.INativeOutputFileFormatConfig);

                    /**
                     * Creates a new NativeOutputFileFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NativeOutputFileFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.INativeOutputFileFormatConfig): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Encodes the specified NativeOutputFileFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.NativeOutputFileFormatConfig.verify|verify} messages.
                     * @param message NativeOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.INativeOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NativeOutputFileFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.NativeOutputFileFormatConfig.verify|verify} messages.
                     * @param message NativeOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.INativeOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NativeOutputFileFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NativeOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Decodes a NativeOutputFileFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NativeOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Verifies a NativeOutputFileFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NativeOutputFileFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NativeOutputFileFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Creates a plain object from a NativeOutputFileFormatConfig message. Also converts values to other types if specified.
                     * @param message NativeOutputFileFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.NativeOutputFileFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NativeOutputFileFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NativeOutputFileFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VttOutputFileFormatConfig. */
                interface IVttOutputFileFormatConfig {
                }

                /** Represents a VttOutputFileFormatConfig. */
                class VttOutputFileFormatConfig implements IVttOutputFileFormatConfig {

                    /**
                     * Constructs a new VttOutputFileFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IVttOutputFileFormatConfig);

                    /**
                     * Creates a new VttOutputFileFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VttOutputFileFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IVttOutputFileFormatConfig): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Encodes the specified VttOutputFileFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.VttOutputFileFormatConfig.verify|verify} messages.
                     * @param message VttOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IVttOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VttOutputFileFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.VttOutputFileFormatConfig.verify|verify} messages.
                     * @param message VttOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IVttOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VttOutputFileFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VttOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Decodes a VttOutputFileFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VttOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Verifies a VttOutputFileFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VttOutputFileFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VttOutputFileFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Creates a plain object from a VttOutputFileFormatConfig message. Also converts values to other types if specified.
                     * @param message VttOutputFileFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.VttOutputFileFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VttOutputFileFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VttOutputFileFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SrtOutputFileFormatConfig. */
                interface ISrtOutputFileFormatConfig {
                }

                /** Represents a SrtOutputFileFormatConfig. */
                class SrtOutputFileFormatConfig implements ISrtOutputFileFormatConfig {

                    /**
                     * Constructs a new SrtOutputFileFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISrtOutputFileFormatConfig);

                    /**
                     * Creates a new SrtOutputFileFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SrtOutputFileFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISrtOutputFileFormatConfig): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Encodes the specified SrtOutputFileFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.SrtOutputFileFormatConfig.verify|verify} messages.
                     * @param message SrtOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISrtOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SrtOutputFileFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SrtOutputFileFormatConfig.verify|verify} messages.
                     * @param message SrtOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISrtOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SrtOutputFileFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SrtOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Decodes a SrtOutputFileFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SrtOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Verifies a SrtOutputFileFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SrtOutputFileFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SrtOutputFileFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Creates a plain object from a SrtOutputFileFormatConfig message. Also converts values to other types if specified.
                     * @param message SrtOutputFileFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SrtOutputFileFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SrtOutputFileFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SrtOutputFileFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputFormatConfig. */
                interface IOutputFormatConfig {

                    /** OutputFormatConfig native */
                    native?: (google.cloud.speech.v2.INativeOutputFileFormatConfig|null);

                    /** OutputFormatConfig vtt */
                    vtt?: (google.cloud.speech.v2.IVttOutputFileFormatConfig|null);

                    /** OutputFormatConfig srt */
                    srt?: (google.cloud.speech.v2.ISrtOutputFileFormatConfig|null);
                }

                /** Represents an OutputFormatConfig. */
                class OutputFormatConfig implements IOutputFormatConfig {

                    /**
                     * Constructs a new OutputFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IOutputFormatConfig);

                    /** OutputFormatConfig native. */
                    public native?: (google.cloud.speech.v2.INativeOutputFileFormatConfig|null);

                    /** OutputFormatConfig vtt. */
                    public vtt?: (google.cloud.speech.v2.IVttOutputFileFormatConfig|null);

                    /** OutputFormatConfig srt. */
                    public srt?: (google.cloud.speech.v2.ISrtOutputFileFormatConfig|null);

                    /**
                     * Creates a new OutputFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IOutputFormatConfig): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Encodes the specified OutputFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.OutputFormatConfig.verify|verify} messages.
                     * @param message OutputFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IOutputFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.OutputFormatConfig.verify|verify} messages.
                     * @param message OutputFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IOutputFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Decodes an OutputFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Verifies an OutputFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Creates a plain object from an OutputFormatConfig message. Also converts values to other types if specified.
                     * @param message OutputFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.OutputFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutputFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognitionOutputConfig. */
                interface IRecognitionOutputConfig {

                    /** RecognitionOutputConfig gcsOutputConfig */
                    gcsOutputConfig?: (google.cloud.speech.v2.IGcsOutputConfig|null);

                    /** RecognitionOutputConfig inlineResponseConfig */
                    inlineResponseConfig?: (google.cloud.speech.v2.IInlineOutputConfig|null);

                    /** RecognitionOutputConfig outputFormatConfig */
                    outputFormatConfig?: (google.cloud.speech.v2.IOutputFormatConfig|null);
                }

                /** Represents a RecognitionOutputConfig. */
                class RecognitionOutputConfig implements IRecognitionOutputConfig {

                    /**
                     * Constructs a new RecognitionOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionOutputConfig);

                    /** RecognitionOutputConfig gcsOutputConfig. */
                    public gcsOutputConfig?: (google.cloud.speech.v2.IGcsOutputConfig|null);

                    /** RecognitionOutputConfig inlineResponseConfig. */
                    public inlineResponseConfig?: (google.cloud.speech.v2.IInlineOutputConfig|null);

                    /** RecognitionOutputConfig outputFormatConfig. */
                    public outputFormatConfig?: (google.cloud.speech.v2.IOutputFormatConfig|null);

                    /** RecognitionOutputConfig output. */
                    public output?: ("gcsOutputConfig"|"inlineResponseConfig");

                    /**
                     * Creates a new RecognitionOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionOutputConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionOutputConfig): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Encodes the specified RecognitionOutputConfig message. Does not implicitly {@link google.cloud.speech.v2.RecognitionOutputConfig.verify|verify} messages.
                     * @param message RecognitionOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionOutputConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionOutputConfig.verify|verify} messages.
                     * @param message RecognitionOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Decodes a RecognitionOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Verifies a RecognitionOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Creates a plain object from a RecognitionOutputConfig message. Also converts values to other types if specified.
                     * @param message RecognitionOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeResponse. */
                interface IBatchRecognizeResponse {

                    /** BatchRecognizeResponse results */
                    results?: ({ [k: string]: google.cloud.speech.v2.IBatchRecognizeFileResult }|null);

                    /** BatchRecognizeResponse totalBilledDuration */
                    totalBilledDuration?: (google.protobuf.IDuration|null);
                }

                /** Represents a BatchRecognizeResponse. */
                class BatchRecognizeResponse implements IBatchRecognizeResponse {

                    /**
                     * Constructs a new BatchRecognizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeResponse);

                    /** BatchRecognizeResponse results. */
                    public results: { [k: string]: google.cloud.speech.v2.IBatchRecognizeFileResult };

                    /** BatchRecognizeResponse totalBilledDuration. */
                    public totalBilledDuration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new BatchRecognizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeResponse): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Encodes the specified BatchRecognizeResponse message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResponse.verify|verify} messages.
                     * @param message BatchRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResponse.verify|verify} messages.
                     * @param message BatchRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Decodes a BatchRecognizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Verifies a BatchRecognizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Creates a plain object from a BatchRecognizeResponse message. Also converts values to other types if specified.
                     * @param message BatchRecognizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeResults. */
                interface IBatchRecognizeResults {

                    /** BatchRecognizeResults results */
                    results?: (google.cloud.speech.v2.ISpeechRecognitionResult[]|null);

                    /** BatchRecognizeResults metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);
                }

                /** Represents a BatchRecognizeResults. */
                class BatchRecognizeResults implements IBatchRecognizeResults {

                    /**
                     * Constructs a new BatchRecognizeResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeResults);

                    /** BatchRecognizeResults results. */
                    public results: google.cloud.speech.v2.ISpeechRecognitionResult[];

                    /** BatchRecognizeResults metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /**
                     * Creates a new BatchRecognizeResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeResults instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeResults): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Encodes the specified BatchRecognizeResults message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResults.verify|verify} messages.
                     * @param message BatchRecognizeResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeResults message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResults.verify|verify} messages.
                     * @param message BatchRecognizeResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Decodes a BatchRecognizeResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Verifies a BatchRecognizeResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Creates a plain object from a BatchRecognizeResults message. Also converts values to other types if specified.
                     * @param message BatchRecognizeResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudStorageResult. */
                interface ICloudStorageResult {

                    /** CloudStorageResult uri */
                    uri?: (string|null);

                    /** CloudStorageResult vttFormatUri */
                    vttFormatUri?: (string|null);

                    /** CloudStorageResult srtFormatUri */
                    srtFormatUri?: (string|null);
                }

                /** Represents a CloudStorageResult. */
                class CloudStorageResult implements ICloudStorageResult {

                    /**
                     * Constructs a new CloudStorageResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICloudStorageResult);

                    /** CloudStorageResult uri. */
                    public uri: string;

                    /** CloudStorageResult vttFormatUri. */
                    public vttFormatUri: string;

                    /** CloudStorageResult srtFormatUri. */
                    public srtFormatUri: string;

                    /**
                     * Creates a new CloudStorageResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudStorageResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICloudStorageResult): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Encodes the specified CloudStorageResult message. Does not implicitly {@link google.cloud.speech.v2.CloudStorageResult.verify|verify} messages.
                     * @param message CloudStorageResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICloudStorageResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudStorageResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CloudStorageResult.verify|verify} messages.
                     * @param message CloudStorageResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICloudStorageResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudStorageResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudStorageResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Decodes a CloudStorageResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudStorageResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Verifies a CloudStorageResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudStorageResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudStorageResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Creates a plain object from a CloudStorageResult message. Also converts values to other types if specified.
                     * @param message CloudStorageResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CloudStorageResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudStorageResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudStorageResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InlineResult. */
                interface IInlineResult {

                    /** InlineResult transcript */
                    transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);

                    /** InlineResult vttCaptions */
                    vttCaptions?: (string|null);

                    /** InlineResult srtCaptions */
                    srtCaptions?: (string|null);
                }

                /** Represents an InlineResult. */
                class InlineResult implements IInlineResult {

                    /**
                     * Constructs a new InlineResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IInlineResult);

                    /** InlineResult transcript. */
                    public transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);

                    /** InlineResult vttCaptions. */
                    public vttCaptions: string;

                    /** InlineResult srtCaptions. */
                    public srtCaptions: string;

                    /**
                     * Creates a new InlineResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InlineResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IInlineResult): google.cloud.speech.v2.InlineResult;

                    /**
                     * Encodes the specified InlineResult message. Does not implicitly {@link google.cloud.speech.v2.InlineResult.verify|verify} messages.
                     * @param message InlineResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IInlineResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InlineResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.InlineResult.verify|verify} messages.
                     * @param message InlineResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IInlineResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InlineResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InlineResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.InlineResult;

                    /**
                     * Decodes an InlineResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InlineResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.InlineResult;

                    /**
                     * Verifies an InlineResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InlineResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InlineResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.InlineResult;

                    /**
                     * Creates a plain object from an InlineResult message. Also converts values to other types if specified.
                     * @param message InlineResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.InlineResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InlineResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InlineResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeFileResult. */
                interface IBatchRecognizeFileResult {

                    /** BatchRecognizeFileResult error */
                    error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeFileResult metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /** BatchRecognizeFileResult cloudStorageResult */
                    cloudStorageResult?: (google.cloud.speech.v2.ICloudStorageResult|null);

                    /** BatchRecognizeFileResult inlineResult */
                    inlineResult?: (google.cloud.speech.v2.IInlineResult|null);

                    /** BatchRecognizeFileResult uri */
                    uri?: (string|null);

                    /** BatchRecognizeFileResult transcript */
                    transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);
                }

                /** Represents a BatchRecognizeFileResult. */
                class BatchRecognizeFileResult implements IBatchRecognizeFileResult {

                    /**
                     * Constructs a new BatchRecognizeFileResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeFileResult);

                    /** BatchRecognizeFileResult error. */
                    public error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeFileResult metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /** BatchRecognizeFileResult cloudStorageResult. */
                    public cloudStorageResult?: (google.cloud.speech.v2.ICloudStorageResult|null);

                    /** BatchRecognizeFileResult inlineResult. */
                    public inlineResult?: (google.cloud.speech.v2.IInlineResult|null);

                    /** BatchRecognizeFileResult uri. */
                    public uri: string;

                    /** BatchRecognizeFileResult transcript. */
                    public transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);

                    /** BatchRecognizeFileResult result. */
                    public result?: ("cloudStorageResult"|"inlineResult");

                    /**
                     * Creates a new BatchRecognizeFileResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeFileResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeFileResult): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Encodes the specified BatchRecognizeFileResult message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileResult.verify|verify} messages.
                     * @param message BatchRecognizeFileResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeFileResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeFileResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileResult.verify|verify} messages.
                     * @param message BatchRecognizeFileResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeFileResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeFileResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeFileResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Decodes a BatchRecognizeFileResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeFileResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Verifies a BatchRecognizeFileResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeFileResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeFileResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Creates a plain object from a BatchRecognizeFileResult message. Also converts values to other types if specified.
                     * @param message BatchRecognizeFileResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeFileResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeFileResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeFileResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeTranscriptionMetadata. */
                interface IBatchRecognizeTranscriptionMetadata {

                    /** BatchRecognizeTranscriptionMetadata progressPercent */
                    progressPercent?: (number|null);

                    /** BatchRecognizeTranscriptionMetadata error */
                    error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeTranscriptionMetadata uri */
                    uri?: (string|null);
                }

                /** Represents a BatchRecognizeTranscriptionMetadata. */
                class BatchRecognizeTranscriptionMetadata implements IBatchRecognizeTranscriptionMetadata {

                    /**
                     * Constructs a new BatchRecognizeTranscriptionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata);

                    /** BatchRecognizeTranscriptionMetadata progressPercent. */
                    public progressPercent: number;

                    /** BatchRecognizeTranscriptionMetadata error. */
                    public error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeTranscriptionMetadata uri. */
                    public uri: string;

                    /**
                     * Creates a new BatchRecognizeTranscriptionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeTranscriptionMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Encodes the specified BatchRecognizeTranscriptionMetadata message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata.verify|verify} messages.
                     * @param message BatchRecognizeTranscriptionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeTranscriptionMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata.verify|verify} messages.
                     * @param message BatchRecognizeTranscriptionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeTranscriptionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeTranscriptionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Decodes a BatchRecognizeTranscriptionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeTranscriptionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Verifies a BatchRecognizeTranscriptionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeTranscriptionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeTranscriptionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Creates a plain object from a BatchRecognizeTranscriptionMetadata message. Also converts values to other types if specified.
                     * @param message BatchRecognizeTranscriptionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeTranscriptionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeTranscriptionMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeMetadata. */
                interface IBatchRecognizeMetadata {

                    /** BatchRecognizeMetadata transcriptionMetadata */
                    transcriptionMetadata?: ({ [k: string]: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata }|null);
                }

                /** Represents a BatchRecognizeMetadata. */
                class BatchRecognizeMetadata implements IBatchRecognizeMetadata {

                    /**
                     * Constructs a new BatchRecognizeMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeMetadata);

                    /** BatchRecognizeMetadata transcriptionMetadata. */
                    public transcriptionMetadata: { [k: string]: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata };

                    /**
                     * Creates a new BatchRecognizeMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeMetadata): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Encodes the specified BatchRecognizeMetadata message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeMetadata.verify|verify} messages.
                     * @param message BatchRecognizeMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeMetadata.verify|verify} messages.
                     * @param message BatchRecognizeMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Decodes a BatchRecognizeMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Verifies a BatchRecognizeMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Creates a plain object from a BatchRecognizeMetadata message. Also converts values to other types if specified.
                     * @param message BatchRecognizeMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeFileMetadata. */
                interface IBatchRecognizeFileMetadata {

                    /** BatchRecognizeFileMetadata uri */
                    uri?: (string|null);

                    /** BatchRecognizeFileMetadata config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeFileMetadata configMask */
                    configMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a BatchRecognizeFileMetadata. */
                class BatchRecognizeFileMetadata implements IBatchRecognizeFileMetadata {

                    /**
                     * Constructs a new BatchRecognizeFileMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeFileMetadata);

                    /** BatchRecognizeFileMetadata uri. */
                    public uri?: (string|null);

                    /** BatchRecognizeFileMetadata config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeFileMetadata configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** BatchRecognizeFileMetadata audioSource. */
                    public audioSource?: "uri";

                    /**
                     * Creates a new BatchRecognizeFileMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeFileMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeFileMetadata): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Encodes the specified BatchRecognizeFileMetadata message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileMetadata.verify|verify} messages.
                     * @param message BatchRecognizeFileMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeFileMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeFileMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileMetadata.verify|verify} messages.
                     * @param message BatchRecognizeFileMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeFileMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeFileMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeFileMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Decodes a BatchRecognizeFileMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeFileMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Verifies a BatchRecognizeFileMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeFileMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeFileMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Creates a plain object from a BatchRecognizeFileMetadata message. Also converts values to other types if specified.
                     * @param message BatchRecognizeFileMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeFileMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeFileMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeFileMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognitionResult. */
                interface IStreamingRecognitionResult {

                    /** StreamingRecognitionResult alternatives */
                    alternatives?: (google.cloud.speech.v2.ISpeechRecognitionAlternative[]|null);

                    /** StreamingRecognitionResult isFinal */
                    isFinal?: (boolean|null);

                    /** StreamingRecognitionResult stability */
                    stability?: (number|null);

                    /** StreamingRecognitionResult resultEndOffset */
                    resultEndOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognitionResult channelTag */
                    channelTag?: (number|null);

                    /** StreamingRecognitionResult languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a StreamingRecognitionResult. */
                class StreamingRecognitionResult implements IStreamingRecognitionResult {

                    /**
                     * Constructs a new StreamingRecognitionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognitionResult);

                    /** StreamingRecognitionResult alternatives. */
                    public alternatives: google.cloud.speech.v2.ISpeechRecognitionAlternative[];

                    /** StreamingRecognitionResult isFinal. */
                    public isFinal: boolean;

                    /** StreamingRecognitionResult stability. */
                    public stability: number;

                    /** StreamingRecognitionResult resultEndOffset. */
                    public resultEndOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognitionResult channelTag. */
                    public channelTag: number;

                    /** StreamingRecognitionResult languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new StreamingRecognitionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognitionResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognitionResult): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Encodes the specified StreamingRecognitionResult message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionResult.verify|verify} messages.
                     * @param message StreamingRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognitionResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionResult.verify|verify} messages.
                     * @param message StreamingRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognitionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Decodes a StreamingRecognitionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Verifies a StreamingRecognitionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognitionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognitionResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Creates a plain object from a StreamingRecognitionResult message. Also converts values to other types if specified.
                     * @param message StreamingRecognitionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognitionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognitionResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognitionResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognizeResponse. */
                interface IStreamingRecognizeResponse {

                    /** StreamingRecognizeResponse results */
                    results?: (google.cloud.speech.v2.IStreamingRecognitionResult[]|null);

                    /** StreamingRecognizeResponse speechEventType */
                    speechEventType?: (google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType|keyof typeof google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType|null);

                    /** StreamingRecognizeResponse speechEventOffset */
                    speechEventOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognizeResponse metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);
                }

                /** Represents a StreamingRecognizeResponse. */
                class StreamingRecognizeResponse implements IStreamingRecognizeResponse {

                    /**
                     * Constructs a new StreamingRecognizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognizeResponse);

                    /** StreamingRecognizeResponse results. */
                    public results: google.cloud.speech.v2.IStreamingRecognitionResult[];

                    /** StreamingRecognizeResponse speechEventType. */
                    public speechEventType: (google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType|keyof typeof google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType);

                    /** StreamingRecognizeResponse speechEventOffset. */
                    public speechEventOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognizeResponse metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /**
                     * Creates a new StreamingRecognizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognizeResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognizeResponse): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Encodes the specified StreamingRecognizeResponse message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeResponse.verify|verify} messages.
                     * @param message StreamingRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognizeResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeResponse.verify|verify} messages.
                     * @param message StreamingRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Decodes a StreamingRecognizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Verifies a StreamingRecognizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Creates a plain object from a StreamingRecognizeResponse message. Also converts values to other types if specified.
                     * @param message StreamingRecognizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognizeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StreamingRecognizeResponse {

                    /** SpeechEventType enum. */
                    enum SpeechEventType {
                        SPEECH_EVENT_TYPE_UNSPECIFIED = 0,
                        END_OF_SINGLE_UTTERANCE = 1,
                        SPEECH_ACTIVITY_BEGIN = 2,
                        SPEECH_ACTIVITY_END = 3
                    }
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config name */
                    name?: (string|null);

                    /** Config kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** Config updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IConfig);

                    /** Config name. */
                    public name: string;

                    /** Config kmsKeyName. */
                    public kmsKeyName: string;

                    /** Config updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IConfig): google.cloud.speech.v2.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link google.cloud.speech.v2.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link google.cloud.speech.v2.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Config
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConfigRequest. */
                interface IGetConfigRequest {

                    /** GetConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConfigRequest. */
                class GetConfigRequest implements IGetConfigRequest {

                    /**
                     * Constructs a new GetConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetConfigRequest);

                    /** GetConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConfigRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetConfigRequest): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Encodes the specified GetConfigRequest message. Does not implicitly {@link google.cloud.speech.v2.GetConfigRequest.verify|verify} messages.
                     * @param message GetConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConfigRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetConfigRequest.verify|verify} messages.
                     * @param message GetConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Decodes a GetConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Verifies a GetConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Creates a plain object from a GetConfigRequest message. Also converts values to other types if specified.
                     * @param message GetConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateConfigRequest. */
                interface IUpdateConfigRequest {

                    /** UpdateConfigRequest config */
                    config?: (google.cloud.speech.v2.IConfig|null);

                    /** UpdateConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateConfigRequest. */
                class UpdateConfigRequest implements IUpdateConfigRequest {

                    /**
                     * Constructs a new UpdateConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdateConfigRequest);

                    /** UpdateConfigRequest config. */
                    public config?: (google.cloud.speech.v2.IConfig|null);

                    /** UpdateConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConfigRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdateConfigRequest): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Encodes the specified UpdateConfigRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdateConfigRequest.verify|verify} messages.
                     * @param message UpdateConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdateConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConfigRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdateConfigRequest.verify|verify} messages.
                     * @param message UpdateConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdateConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Decodes an UpdateConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Verifies an UpdateConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Creates a plain object from an UpdateConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdateConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomClass. */
                interface ICustomClass {

                    /** CustomClass name */
                    name?: (string|null);

                    /** CustomClass uid */
                    uid?: (string|null);

                    /** CustomClass displayName */
                    displayName?: (string|null);

                    /** CustomClass items */
                    items?: (google.cloud.speech.v2.CustomClass.IClassItem[]|null);

                    /** CustomClass state */
                    state?: (google.cloud.speech.v2.CustomClass.State|keyof typeof google.cloud.speech.v2.CustomClass.State|null);

                    /** CustomClass createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** CustomClass etag */
                    etag?: (string|null);

                    /** CustomClass reconciling */
                    reconciling?: (boolean|null);

                    /** CustomClass kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** CustomClass kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);
                }

                /** Represents a CustomClass. */
                class CustomClass implements ICustomClass {

                    /**
                     * Constructs a new CustomClass.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICustomClass);

                    /** CustomClass name. */
                    public name: string;

                    /** CustomClass uid. */
                    public uid: string;

                    /** CustomClass displayName. */
                    public displayName: string;

                    /** CustomClass items. */
                    public items: google.cloud.speech.v2.CustomClass.IClassItem[];

                    /** CustomClass state. */
                    public state: (google.cloud.speech.v2.CustomClass.State|keyof typeof google.cloud.speech.v2.CustomClass.State);

                    /** CustomClass createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass annotations. */
                    public annotations: { [k: string]: string };

                    /** CustomClass etag. */
                    public etag: string;

                    /** CustomClass reconciling. */
                    public reconciling: boolean;

                    /** CustomClass kmsKeyName. */
                    public kmsKeyName: string;

                    /** CustomClass kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /**
                     * Creates a new CustomClass instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomClass instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICustomClass): google.cloud.speech.v2.CustomClass;

                    /**
                     * Encodes the specified CustomClass message. Does not implicitly {@link google.cloud.speech.v2.CustomClass.verify|verify} messages.
                     * @param message CustomClass message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICustomClass, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomClass message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CustomClass.verify|verify} messages.
                     * @param message CustomClass message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICustomClass, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomClass message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomClass
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CustomClass;

                    /**
                     * Decodes a CustomClass message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomClass
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CustomClass;

                    /**
                     * Verifies a CustomClass message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomClass message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomClass
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CustomClass;

                    /**
                     * Creates a plain object from a CustomClass message. Also converts values to other types if specified.
                     * @param message CustomClass
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CustomClass, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomClass to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomClass
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomClass {

                    /** Properties of a ClassItem. */
                    interface IClassItem {

                        /** ClassItem value */
                        value?: (string|null);
                    }

                    /** Represents a ClassItem. */
                    class ClassItem implements IClassItem {

                        /**
                         * Constructs a new ClassItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.CustomClass.IClassItem);

                        /** ClassItem value. */
                        public value: string;

                        /**
                         * Creates a new ClassItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClassItem instance
                         */
                        public static create(properties?: google.cloud.speech.v2.CustomClass.IClassItem): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Encodes the specified ClassItem message. Does not implicitly {@link google.cloud.speech.v2.CustomClass.ClassItem.verify|verify} messages.
                         * @param message ClassItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.CustomClass.IClassItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClassItem message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CustomClass.ClassItem.verify|verify} messages.
                         * @param message ClassItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.CustomClass.IClassItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClassItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClassItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Decodes a ClassItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClassItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Verifies a ClassItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClassItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClassItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Creates a plain object from a ClassItem message. Also converts values to other types if specified.
                         * @param message ClassItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.CustomClass.ClassItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClassItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClassItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 2,
                        DELETED = 4
                    }
                }

                /** Properties of a PhraseSet. */
                interface IPhraseSet {

                    /** PhraseSet name */
                    name?: (string|null);

                    /** PhraseSet uid */
                    uid?: (string|null);

                    /** PhraseSet phrases */
                    phrases?: (google.cloud.speech.v2.PhraseSet.IPhrase[]|null);

                    /** PhraseSet boost */
                    boost?: (number|null);

                    /** PhraseSet displayName */
                    displayName?: (string|null);

                    /** PhraseSet state */
                    state?: (google.cloud.speech.v2.PhraseSet.State|keyof typeof google.cloud.speech.v2.PhraseSet.State|null);

                    /** PhraseSet createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** PhraseSet etag */
                    etag?: (string|null);

                    /** PhraseSet reconciling */
                    reconciling?: (boolean|null);

                    /** PhraseSet kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** PhraseSet kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);
                }

                /** Represents a PhraseSet. */
                class PhraseSet implements IPhraseSet {

                    /**
                     * Constructs a new PhraseSet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IPhraseSet);

                    /** PhraseSet name. */
                    public name: string;

                    /** PhraseSet uid. */
                    public uid: string;

                    /** PhraseSet phrases. */
                    public phrases: google.cloud.speech.v2.PhraseSet.IPhrase[];

                    /** PhraseSet boost. */
                    public boost: number;

                    /** PhraseSet displayName. */
                    public displayName: string;

                    /** PhraseSet state. */
                    public state: (google.cloud.speech.v2.PhraseSet.State|keyof typeof google.cloud.speech.v2.PhraseSet.State);

                    /** PhraseSet createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet annotations. */
                    public annotations: { [k: string]: string };

                    /** PhraseSet etag. */
                    public etag: string;

                    /** PhraseSet reconciling. */
                    public reconciling: boolean;

                    /** PhraseSet kmsKeyName. */
                    public kmsKeyName: string;

                    /** PhraseSet kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /**
                     * Creates a new PhraseSet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseSet instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IPhraseSet): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Encodes the specified PhraseSet message. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.verify|verify} messages.
                     * @param message PhraseSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseSet message, length delimited. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.verify|verify} messages.
                     * @param message PhraseSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseSet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Decodes a PhraseSet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Verifies a PhraseSet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseSet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseSet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Creates a plain object from a PhraseSet message. Also converts values to other types if specified.
                     * @param message PhraseSet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.PhraseSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseSet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhraseSet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PhraseSet {

                    /** Properties of a Phrase. */
                    interface IPhrase {

                        /** Phrase value */
                        value?: (string|null);

                        /** Phrase boost */
                        boost?: (number|null);
                    }

                    /** Represents a Phrase. */
                    class Phrase implements IPhrase {

                        /**
                         * Constructs a new Phrase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.PhraseSet.IPhrase);

                        /** Phrase value. */
                        public value: string;

                        /** Phrase boost. */
                        public boost: number;

                        /**
                         * Creates a new Phrase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Phrase instance
                         */
                        public static create(properties?: google.cloud.speech.v2.PhraseSet.IPhrase): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Encodes the specified Phrase message. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.Phrase.verify|verify} messages.
                         * @param message Phrase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.PhraseSet.IPhrase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Phrase message, length delimited. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.Phrase.verify|verify} messages.
                         * @param message Phrase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.PhraseSet.IPhrase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Phrase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Phrase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Decodes a Phrase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Phrase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Verifies a Phrase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Phrase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Phrase
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Creates a plain object from a Phrase message. Also converts values to other types if specified.
                         * @param message Phrase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.PhraseSet.Phrase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Phrase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Phrase
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 2,
                        DELETED = 4
                    }
                }

                /** Properties of a CreateCustomClassRequest. */
                interface ICreateCustomClassRequest {

                    /** CreateCustomClassRequest customClass */
                    customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** CreateCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreateCustomClassRequest customClassId */
                    customClassId?: (string|null);

                    /** CreateCustomClassRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreateCustomClassRequest. */
                class CreateCustomClassRequest implements ICreateCustomClassRequest {

                    /**
                     * Constructs a new CreateCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICreateCustomClassRequest);

                    /** CreateCustomClassRequest customClass. */
                    public customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** CreateCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreateCustomClassRequest customClassId. */
                    public customClassId: string;

                    /** CreateCustomClassRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreateCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICreateCustomClassRequest): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Encodes the specified CreateCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.CreateCustomClassRequest.verify|verify} messages.
                     * @param message CreateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICreateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CreateCustomClassRequest.verify|verify} messages.
                     * @param message CreateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICreateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Decodes a CreateCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Verifies a CreateCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Creates a plain object from a CreateCustomClassRequest message. Also converts values to other types if specified.
                     * @param message CreateCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CreateCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomClassesRequest. */
                interface IListCustomClassesRequest {

                    /** ListCustomClassesRequest parent */
                    parent?: (string|null);

                    /** ListCustomClassesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCustomClassesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCustomClassesRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListCustomClassesRequest. */
                class ListCustomClassesRequest implements IListCustomClassesRequest {

                    /**
                     * Constructs a new ListCustomClassesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListCustomClassesRequest);

                    /** ListCustomClassesRequest parent. */
                    public parent: string;

                    /** ListCustomClassesRequest pageSize. */
                    public pageSize: number;

                    /** ListCustomClassesRequest pageToken. */
                    public pageToken: string;

                    /** ListCustomClassesRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListCustomClassesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomClassesRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListCustomClassesRequest): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Encodes the specified ListCustomClassesRequest message. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesRequest.verify|verify} messages.
                     * @param message ListCustomClassesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListCustomClassesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomClassesRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesRequest.verify|verify} messages.
                     * @param message ListCustomClassesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListCustomClassesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomClassesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomClassesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Decodes a ListCustomClassesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomClassesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Verifies a ListCustomClassesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomClassesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomClassesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Creates a plain object from a ListCustomClassesRequest message. Also converts values to other types if specified.
                     * @param message ListCustomClassesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListCustomClassesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomClassesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomClassesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomClassesResponse. */
                interface IListCustomClassesResponse {

                    /** ListCustomClassesResponse customClasses */
                    customClasses?: (google.cloud.speech.v2.ICustomClass[]|null);

                    /** ListCustomClassesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCustomClassesResponse. */
                class ListCustomClassesResponse implements IListCustomClassesResponse {

                    /**
                     * Constructs a new ListCustomClassesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListCustomClassesResponse);

                    /** ListCustomClassesResponse customClasses. */
                    public customClasses: google.cloud.speech.v2.ICustomClass[];

                    /** ListCustomClassesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCustomClassesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomClassesResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListCustomClassesResponse): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Encodes the specified ListCustomClassesResponse message. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesResponse.verify|verify} messages.
                     * @param message ListCustomClassesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListCustomClassesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomClassesResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesResponse.verify|verify} messages.
                     * @param message ListCustomClassesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListCustomClassesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomClassesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomClassesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Decodes a ListCustomClassesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomClassesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Verifies a ListCustomClassesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomClassesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomClassesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Creates a plain object from a ListCustomClassesResponse message. Also converts values to other types if specified.
                     * @param message ListCustomClassesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListCustomClassesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomClassesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomClassesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCustomClassRequest. */
                interface IGetCustomClassRequest {

                    /** GetCustomClassRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCustomClassRequest. */
                class GetCustomClassRequest implements IGetCustomClassRequest {

                    /**
                     * Constructs a new GetCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetCustomClassRequest);

                    /** GetCustomClassRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetCustomClassRequest): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Encodes the specified GetCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.GetCustomClassRequest.verify|verify} messages.
                     * @param message GetCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetCustomClassRequest.verify|verify} messages.
                     * @param message GetCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Decodes a GetCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Verifies a GetCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Creates a plain object from a GetCustomClassRequest message. Also converts values to other types if specified.
                     * @param message GetCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCustomClassRequest. */
                interface IUpdateCustomClassRequest {

                    /** UpdateCustomClassRequest customClass */
                    customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** UpdateCustomClassRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateCustomClassRequest. */
                class UpdateCustomClassRequest implements IUpdateCustomClassRequest {

                    /**
                     * Constructs a new UpdateCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdateCustomClassRequest);

                    /** UpdateCustomClassRequest customClass. */
                    public customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** UpdateCustomClassRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdateCustomClassRequest): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Encodes the specified UpdateCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdateCustomClassRequest.verify|verify} messages.
                     * @param message UpdateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdateCustomClassRequest.verify|verify} messages.
                     * @param message UpdateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Decodes an UpdateCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Verifies an UpdateCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Creates a plain object from an UpdateCustomClassRequest message. Also converts values to other types if specified.
                     * @param message UpdateCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdateCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCustomClassRequest. */
                interface IDeleteCustomClassRequest {

                    /** DeleteCustomClassRequest name */
                    name?: (string|null);

                    /** DeleteCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteCustomClassRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteCustomClassRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteCustomClassRequest. */
                class DeleteCustomClassRequest implements IDeleteCustomClassRequest {

                    /**
                     * Constructs a new DeleteCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IDeleteCustomClassRequest);

                    /** DeleteCustomClassRequest name. */
                    public name: string;

                    /** DeleteCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteCustomClassRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteCustomClassRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IDeleteCustomClassRequest): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Encodes the specified DeleteCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.DeleteCustomClassRequest.verify|verify} messages.
                     * @param message DeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IDeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.DeleteCustomClassRequest.verify|verify} messages.
                     * @param message DeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IDeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Decodes a DeleteCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Verifies a DeleteCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Creates a plain object from a DeleteCustomClassRequest message. Also converts values to other types if specified.
                     * @param message DeleteCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.DeleteCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeleteCustomClassRequest. */
                interface IUndeleteCustomClassRequest {

                    /** UndeleteCustomClassRequest name */
                    name?: (string|null);

                    /** UndeleteCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UndeleteCustomClassRequest etag */
                    etag?: (string|null);
                }

                /** Represents an UndeleteCustomClassRequest. */
                class UndeleteCustomClassRequest implements IUndeleteCustomClassRequest {

                    /**
                     * Constructs a new UndeleteCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUndeleteCustomClassRequest);

                    /** UndeleteCustomClassRequest name. */
                    public name: string;

                    /** UndeleteCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UndeleteCustomClassRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new UndeleteCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeleteCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUndeleteCustomClassRequest): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Encodes the specified UndeleteCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.UndeleteCustomClassRequest.verify|verify} messages.
                     * @param message UndeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUndeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeleteCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UndeleteCustomClassRequest.verify|verify} messages.
                     * @param message UndeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUndeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeleteCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Decodes an UndeleteCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Verifies an UndeleteCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeleteCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeleteCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Creates a plain object from an UndeleteCustomClassRequest message. Also converts values to other types if specified.
                     * @param message UndeleteCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UndeleteCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeleteCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeleteCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePhraseSetRequest. */
                interface ICreatePhraseSetRequest {

                    /** CreatePhraseSetRequest phraseSet */
                    phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** CreatePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreatePhraseSetRequest phraseSetId */
                    phraseSetId?: (string|null);

                    /** CreatePhraseSetRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreatePhraseSetRequest. */
                class CreatePhraseSetRequest implements ICreatePhraseSetRequest {

                    /**
                     * Constructs a new CreatePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICreatePhraseSetRequest);

                    /** CreatePhraseSetRequest phraseSet. */
                    public phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** CreatePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreatePhraseSetRequest phraseSetId. */
                    public phraseSetId: string;

                    /** CreatePhraseSetRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreatePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICreatePhraseSetRequest): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Encodes the specified CreatePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.CreatePhraseSetRequest.verify|verify} messages.
                     * @param message CreatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICreatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CreatePhraseSetRequest.verify|verify} messages.
                     * @param message CreatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICreatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Decodes a CreatePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Verifies a CreatePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Creates a plain object from a CreatePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message CreatePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CreatePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhraseSetsRequest. */
                interface IListPhraseSetsRequest {

                    /** ListPhraseSetsRequest parent */
                    parent?: (string|null);

                    /** ListPhraseSetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPhraseSetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPhraseSetsRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListPhraseSetsRequest. */
                class ListPhraseSetsRequest implements IListPhraseSetsRequest {

                    /**
                     * Constructs a new ListPhraseSetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListPhraseSetsRequest);

                    /** ListPhraseSetsRequest parent. */
                    public parent: string;

                    /** ListPhraseSetsRequest pageSize. */
                    public pageSize: number;

                    /** ListPhraseSetsRequest pageToken. */
                    public pageToken: string;

                    /** ListPhraseSetsRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListPhraseSetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhraseSetsRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListPhraseSetsRequest): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Encodes the specified ListPhraseSetsRequest message. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsRequest.verify|verify} messages.
                     * @param message ListPhraseSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListPhraseSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhraseSetsRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsRequest.verify|verify} messages.
                     * @param message ListPhraseSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListPhraseSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhraseSetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhraseSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Decodes a ListPhraseSetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhraseSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Verifies a ListPhraseSetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhraseSetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhraseSetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Creates a plain object from a ListPhraseSetsRequest message. Also converts values to other types if specified.
                     * @param message ListPhraseSetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListPhraseSetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhraseSetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhraseSetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhraseSetsResponse. */
                interface IListPhraseSetsResponse {

                    /** ListPhraseSetsResponse phraseSets */
                    phraseSets?: (google.cloud.speech.v2.IPhraseSet[]|null);

                    /** ListPhraseSetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPhraseSetsResponse. */
                class ListPhraseSetsResponse implements IListPhraseSetsResponse {

                    /**
                     * Constructs a new ListPhraseSetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListPhraseSetsResponse);

                    /** ListPhraseSetsResponse phraseSets. */
                    public phraseSets: google.cloud.speech.v2.IPhraseSet[];

                    /** ListPhraseSetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPhraseSetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhraseSetsResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListPhraseSetsResponse): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Encodes the specified ListPhraseSetsResponse message. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsResponse.verify|verify} messages.
                     * @param message ListPhraseSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListPhraseSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhraseSetsResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsResponse.verify|verify} messages.
                     * @param message ListPhraseSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListPhraseSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhraseSetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhraseSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Decodes a ListPhraseSetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhraseSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Verifies a ListPhraseSetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhraseSetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhraseSetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Creates a plain object from a ListPhraseSetsResponse message. Also converts values to other types if specified.
                     * @param message ListPhraseSetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListPhraseSetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhraseSetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhraseSetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPhraseSetRequest. */
                interface IGetPhraseSetRequest {

                    /** GetPhraseSetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPhraseSetRequest. */
                class GetPhraseSetRequest implements IGetPhraseSetRequest {

                    /**
                     * Constructs a new GetPhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetPhraseSetRequest);

                    /** GetPhraseSetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetPhraseSetRequest): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Encodes the specified GetPhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.GetPhraseSetRequest.verify|verify} messages.
                     * @param message GetPhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetPhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetPhraseSetRequest.verify|verify} messages.
                     * @param message GetPhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetPhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Decodes a GetPhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Verifies a GetPhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Creates a plain object from a GetPhraseSetRequest message. Also converts values to other types if specified.
                     * @param message GetPhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetPhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePhraseSetRequest. */
                interface IUpdatePhraseSetRequest {

                    /** UpdatePhraseSetRequest phraseSet */
                    phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** UpdatePhraseSetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdatePhraseSetRequest. */
                class UpdatePhraseSetRequest implements IUpdatePhraseSetRequest {

                    /**
                     * Constructs a new UpdatePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdatePhraseSetRequest);

                    /** UpdatePhraseSetRequest phraseSet. */
                    public phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** UpdatePhraseSetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdatePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdatePhraseSetRequest): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Encodes the specified UpdatePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdatePhraseSetRequest.verify|verify} messages.
                     * @param message UpdatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdatePhraseSetRequest.verify|verify} messages.
                     * @param message UpdatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Decodes an UpdatePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Verifies an UpdatePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Creates a plain object from an UpdatePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message UpdatePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdatePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePhraseSetRequest. */
                interface IDeletePhraseSetRequest {

                    /** DeletePhraseSetRequest name */
                    name?: (string|null);

                    /** DeletePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeletePhraseSetRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeletePhraseSetRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeletePhraseSetRequest. */
                class DeletePhraseSetRequest implements IDeletePhraseSetRequest {

                    /**
                     * Constructs a new DeletePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IDeletePhraseSetRequest);

                    /** DeletePhraseSetRequest name. */
                    public name: string;

                    /** DeletePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeletePhraseSetRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeletePhraseSetRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeletePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IDeletePhraseSetRequest): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Encodes the specified DeletePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.DeletePhraseSetRequest.verify|verify} messages.
                     * @param message DeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IDeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.DeletePhraseSetRequest.verify|verify} messages.
                     * @param message DeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IDeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Decodes a DeletePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Verifies a DeletePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Creates a plain object from a DeletePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message DeletePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.DeletePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeletePhraseSetRequest. */
                interface IUndeletePhraseSetRequest {

                    /** UndeletePhraseSetRequest name */
                    name?: (string|null);

                    /** UndeletePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UndeletePhraseSetRequest etag */
                    etag?: (string|null);
                }

                /** Represents an UndeletePhraseSetRequest. */
                class UndeletePhraseSetRequest implements IUndeletePhraseSetRequest {

                    /**
                     * Constructs a new UndeletePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUndeletePhraseSetRequest);

                    /** UndeletePhraseSetRequest name. */
                    public name: string;

                    /** UndeletePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UndeletePhraseSetRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new UndeletePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeletePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUndeletePhraseSetRequest): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Encodes the specified UndeletePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.UndeletePhraseSetRequest.verify|verify} messages.
                     * @param message UndeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUndeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeletePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UndeletePhraseSetRequest.verify|verify} messages.
                     * @param message UndeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUndeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeletePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Decodes an UndeletePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Verifies an UndeletePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeletePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeletePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Creates a plain object from an UndeletePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message UndeletePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UndeletePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeletePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeletePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelFeature. */
                interface IModelFeature {

                    /** ModelFeature feature */
                    feature?: (string|null);

                    /** ModelFeature releaseState */
                    releaseState?: (string|null);
                }

                /** Represents a ModelFeature. */
                class ModelFeature implements IModelFeature {

                    /**
                     * Constructs a new ModelFeature.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IModelFeature);

                    /** ModelFeature feature. */
                    public feature: string;

                    /** ModelFeature releaseState. */
                    public releaseState: string;

                    /**
                     * Creates a new ModelFeature instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelFeature instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IModelFeature): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Encodes the specified ModelFeature message. Does not implicitly {@link google.cloud.speech.v2.ModelFeature.verify|verify} messages.
                     * @param message ModelFeature message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IModelFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelFeature message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ModelFeature.verify|verify} messages.
                     * @param message ModelFeature message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IModelFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelFeature message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelFeature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Decodes a ModelFeature message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelFeature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Verifies a ModelFeature message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelFeature message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelFeature
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Creates a plain object from a ModelFeature message. Also converts values to other types if specified.
                     * @param message ModelFeature
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ModelFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelFeature to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelFeature
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelFeatures. */
                interface IModelFeatures {

                    /** ModelFeatures modelFeature */
                    modelFeature?: (google.cloud.speech.v2.IModelFeature[]|null);
                }

                /** Represents a ModelFeatures. */
                class ModelFeatures implements IModelFeatures {

                    /**
                     * Constructs a new ModelFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IModelFeatures);

                    /** ModelFeatures modelFeature. */
                    public modelFeature: google.cloud.speech.v2.IModelFeature[];

                    /**
                     * Creates a new ModelFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelFeatures instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IModelFeatures): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Encodes the specified ModelFeatures message. Does not implicitly {@link google.cloud.speech.v2.ModelFeatures.verify|verify} messages.
                     * @param message ModelFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IModelFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelFeatures message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ModelFeatures.verify|verify} messages.
                     * @param message ModelFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IModelFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Decodes a ModelFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Verifies a ModelFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Creates a plain object from a ModelFeatures message. Also converts values to other types if specified.
                     * @param message ModelFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ModelFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelMetadata. */
                interface IModelMetadata {

                    /** ModelMetadata modelFeatures */
                    modelFeatures?: ({ [k: string]: google.cloud.speech.v2.IModelFeatures }|null);
                }

                /** Represents a ModelMetadata. */
                class ModelMetadata implements IModelMetadata {

                    /**
                     * Constructs a new ModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IModelMetadata);

                    /** ModelMetadata modelFeatures. */
                    public modelFeatures: { [k: string]: google.cloud.speech.v2.IModelFeatures };

                    /**
                     * Creates a new ModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IModelMetadata): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Encodes the specified ModelMetadata message. Does not implicitly {@link google.cloud.speech.v2.ModelMetadata.verify|verify} messages.
                     * @param message ModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ModelMetadata.verify|verify} messages.
                     * @param message ModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Decodes a ModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Verifies a ModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Creates a plain object from a ModelMetadata message. Also converts values to other types if specified.
                     * @param message ModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LanguageMetadata. */
                interface ILanguageMetadata {

                    /** LanguageMetadata models */
                    models?: ({ [k: string]: google.cloud.speech.v2.IModelMetadata }|null);
                }

                /** Represents a LanguageMetadata. */
                class LanguageMetadata implements ILanguageMetadata {

                    /**
                     * Constructs a new LanguageMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ILanguageMetadata);

                    /** LanguageMetadata models. */
                    public models: { [k: string]: google.cloud.speech.v2.IModelMetadata };

                    /**
                     * Creates a new LanguageMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LanguageMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ILanguageMetadata): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Encodes the specified LanguageMetadata message. Does not implicitly {@link google.cloud.speech.v2.LanguageMetadata.verify|verify} messages.
                     * @param message LanguageMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ILanguageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LanguageMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.LanguageMetadata.verify|verify} messages.
                     * @param message LanguageMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ILanguageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LanguageMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LanguageMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Decodes a LanguageMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LanguageMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Verifies a LanguageMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LanguageMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LanguageMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Creates a plain object from a LanguageMetadata message. Also converts values to other types if specified.
                     * @param message LanguageMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.LanguageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LanguageMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LanguageMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessMetadata. */
                interface IAccessMetadata {

                    /** AccessMetadata constraintType */
                    constraintType?: (google.cloud.speech.v2.AccessMetadata.ConstraintType|keyof typeof google.cloud.speech.v2.AccessMetadata.ConstraintType|null);
                }

                /** Represents an AccessMetadata. */
                class AccessMetadata implements IAccessMetadata {

                    /**
                     * Constructs a new AccessMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IAccessMetadata);

                    /** AccessMetadata constraintType. */
                    public constraintType: (google.cloud.speech.v2.AccessMetadata.ConstraintType|keyof typeof google.cloud.speech.v2.AccessMetadata.ConstraintType);

                    /**
                     * Creates a new AccessMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IAccessMetadata): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Encodes the specified AccessMetadata message. Does not implicitly {@link google.cloud.speech.v2.AccessMetadata.verify|verify} messages.
                     * @param message AccessMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IAccessMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.AccessMetadata.verify|verify} messages.
                     * @param message AccessMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IAccessMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Decodes an AccessMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Verifies an AccessMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Creates a plain object from an AccessMetadata message. Also converts values to other types if specified.
                     * @param message AccessMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.AccessMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccessMetadata {

                    /** ConstraintType enum. */
                    enum ConstraintType {
                        CONSTRAINT_TYPE_UNSPECIFIED = 0,
                        RESOURCE_LOCATIONS_ORG_POLICY_CREATE_CONSTRAINT = 1
                    }
                }

                /** Properties of a LocationsMetadata. */
                interface ILocationsMetadata {

                    /** LocationsMetadata languages */
                    languages?: (google.cloud.speech.v2.ILanguageMetadata|null);

                    /** LocationsMetadata accessMetadata */
                    accessMetadata?: (google.cloud.speech.v2.IAccessMetadata|null);
                }

                /** Represents a LocationsMetadata. */
                class LocationsMetadata implements ILocationsMetadata {

                    /**
                     * Constructs a new LocationsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ILocationsMetadata);

                    /** LocationsMetadata languages. */
                    public languages?: (google.cloud.speech.v2.ILanguageMetadata|null);

                    /** LocationsMetadata accessMetadata. */
                    public accessMetadata?: (google.cloud.speech.v2.IAccessMetadata|null);

                    /**
                     * Creates a new LocationsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationsMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ILocationsMetadata): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Encodes the specified LocationsMetadata message. Does not implicitly {@link google.cloud.speech.v2.LocationsMetadata.verify|verify} messages.
                     * @param message LocationsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ILocationsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationsMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.LocationsMetadata.verify|verify} messages.
                     * @param message LocationsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ILocationsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Decodes a LocationsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Verifies a LocationsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Creates a plain object from a LocationsMetadata message. Also converts values to other types if specified.
                     * @param message LocationsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.LocationsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocationsMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a FieldInfo. */
        interface IFieldInfo {

            /** FieldInfo format */
            format?: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format|null);
        }

        /** Represents a FieldInfo. */
        class FieldInfo implements IFieldInfo {

            /**
             * Constructs a new FieldInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IFieldInfo);

            /** FieldInfo format. */
            public format: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format);

            /**
             * Creates a new FieldInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldInfo instance
             */
            public static create(properties?: google.api.IFieldInfo): google.api.FieldInfo;

            /**
             * Encodes the specified FieldInfo message. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldInfo message, length delimited. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.FieldInfo;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.FieldInfo;

            /**
             * Verifies a FieldInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldInfo
             */
            public static fromObject(object: { [k: string]: any }): google.api.FieldInfo;

            /**
             * Creates a plain object from a FieldInfo message. Also converts values to other types if specified.
             * @param message FieldInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.FieldInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldInfo {

            /** Format enum. */
            enum Format {
                FORMAT_UNSPECIFIED = 0,
                UUID4 = 1,
                IPV4 = 2,
                IPV6 = 3,
                IPV4_OR_IPV6 = 4
            }
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|Buffer|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|Buffer|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations|listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
